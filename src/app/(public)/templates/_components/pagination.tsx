'use client'
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/pagination";
import { useQueryState } from "nuqs";

const PaginatedComponent = ({ totalItems, perPage = 10, totalPage }: { totalItems: number; perPage?: number, totalPage: number }) => {
  const [page, setPage] = useQueryState("page", { defaultValue: "1" });

  const currentPage = parseInt(page, 10);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPage) {
      setPage(newPage.toString());
    }
  };

  return (
    <Pagination className="mx-0 justify-end flex-grow-0 w-fit">
      <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={currentPage > 1 ? `?page=${currentPage - 1}` : "#"}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
              onClick={(e) => {
                if (currentPage === 1) {
                  e.preventDefault(); // Mencegah aksi jika halaman pertama
                  return;
                }
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>


        {Array.from({ length: totalPage }, (_, i) => i + 1)
          .filter((pageNum) => {
            return (
              pageNum === 1 || // Selalu tampilkan halaman pertama
              pageNum === totalPage || // Selalu tampilkan halaman terakhir
              (pageNum >= currentPage - 1 && pageNum <= currentPage + 1) // Tampilkan halaman sekitar halaman aktif
            );
          })
          .map((pageNum, index, array) => (
            <React.Fragment key={pageNum}>
              {index > 0 && pageNum !== array[index - 1] + 1 && ( // Tambahkan ellipsis jika ada celah
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  href={`?page=${pageNum}`}
                  isActive={pageNum === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(pageNum);
                  }}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            </React.Fragment>
          ))}

        <PaginationItem>
          <PaginationNext
            href={currentPage < totalPage ? `?page=${currentPage + 1}` : "#"}
            aria-disabled={currentPage === totalPage}
            className={currentPage === totalPage ? "opacity-50 cursor-not-allowed" : ""}
            onClick={(e) => {
              if (currentPage === totalPage) {
                e.preventDefault(); // Mencegah aksi jika sudah di halaman terakhir
                return;
              }
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
};
export default PaginatedComponent;
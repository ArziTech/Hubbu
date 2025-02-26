import { TemplateStatus, PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const roles: Prisma.RoleCreateInput[] = [
  {
    id: "1",
    title: "ADMIN",
  },
  {
    id: "2",
    title: "CUSTOMER",
  },
];

const hashedPassword = "password";

const users: Prisma.UserCreateInput[] = [
  {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "2",
    name: "Jane Doe",
    username: "janedoe",
    email: "janedoe@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "3",
    name: "Vintage Guru",
    username: "vintageguru",
    email: "vintageguru@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "4",
    name: "Job Seeker Pro",
    username: "jobseekerpro",
    email: "jobseekerpro@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "5",
    name: "Designer Pro",
    username: "designerpro",
    email: "designerpro@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "6",
    name: "Alice Johnson",
    username: "alicejohnson",
    email: "alice@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "7",
    name: "Mark Smith",
    username: "marksmith",
    email: "mark@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "8",
    name: "Sophia Lee",
    username: "sophialee",
    email: "sophia@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "9",
    name: "Emma Brown",
    username: "emmabrown",
    email: "emma@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "10",
    name: "David Wilson",
    username: "davidwilson",
    email: "david@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "11",
    name: "Mike Taylor",
    username: "miketaylor",
    email: "mike@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "12",
    name: "Chris Johnson",
    username: "chrisjohnson",
    email: "chris@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "13",
    name: "Lucas Martin",
    username: "lucasmartin",
    email: "lucas@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "14",
    name: "Photo Expert",
    username: "photoexpert",
    email: "photoexpert@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "15",
    name: "Store Owner",
    username: "storeowner",
    email: "storeowner@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "16",
    name: "Agency Owner",
    username: "agencyowner",
    email: "agencyowner@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
  {
    id: "17",
    name: "Event Planner",
    username: "eventplanner",
    email: "eventplanner@example.com",
    password: hashedPassword,
    roles: { connect: { id: "1" } },
  },
];

const coupons: Prisma.CouponCreateInput[] = [
  {
    id: "1",
    code: "WELCOME10",
    discount: 10,
    timeUsed: 5,
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "2",
    code: "SUMMER20",
    discount: 20,
    timeUsed: 3,
    expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 6)), // Kedaluwarsa 6 bulan dari sekarang
  },
  {
    id: "3",
    code: "FREESHIP",
    discount: 0,
    timeUsed: 10,
    expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 3)), // Kedaluwarsa 3 bulan dari sekarang
  },
  {
    id: "4",
    code: "BLACKFRIDAY50",
    discount: 50,
    timeUsed: 2,
    expiredAt: new Date(new Date().setDate(new Date().getDate() + 30)), // Kedaluwarsa 30 hari dari sekarang
  },
  {
    id: "5",
    code: "NEWYEAR25",
    discount: 25,
    timeUsed: 7,
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "6",
    code: "SPRING15",
    discount: 15,
    timeUsed: 1,
    expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 2)), // Kedaluwarsa 2 bulan dari sekarang
  },
  {
    id: "7",
    code: "HOLIDAY30",
    discount: 30,
    timeUsed: 4,
    expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 1)), // Kedaluwarsa 1 bulan dari sekarang
  },
  {
    id: "8",
    code: "LOYALTY5",
    discount: 5,
    timeUsed: 8,
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "9",
    code: "FIRSTORDER",
    discount: 10,
    timeUsed: 12,
    expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 3)), // Kedaluwarsa 3 bulan dari sekarang
  },
  {
    id: "10",
    code: "MEMBER20",
    discount: 20,
    timeUsed: 6,
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
];

const templateCategories: Prisma.TemplateCategoryCreateInput[] = [
  {
    id: "1", // Kategori 1
    title: "Wedding",
  },
  {
    id: "2", // Kategori 2
    title: "Business",
  },
  {
    id: "3", // Kategori 3
    title: "Portfolio",
  },
  {
    id: "4", // Kategori 4
    title: "Education",
  },
  {
    id: "5", // Kategori 5
    title: "Photography",
  },
  {
    id: "6", // Kategori 6
    title: "Travel",
  },
  {
    id: "7", // Kategori 7
    title: "Food & Drink",
  },
  {
    id: "8", // Kategori 8
    title: "Events",
  },
  {
    id: "9", // Kategori 9
    title: "E-commerce",
  },
  {
    id: "10", // Kategori 10
    title: "Creative",
  },
  {
    id: "11", // Kategori 11
    title: "Health & Fitness",
  },
  {
    id: "12", // Kategori 12
    title: "Technology",
  },
  {
    id: "13", // Kategori 13
    title: "Fashion",
  },
  {
    id: "14", // Kategori 14
    title: "Art & Design",
  },
  {
    id: "15", // Kategori 15
    title: "Music",
  },
  {
    id: "16", // Kategori 16
    title: "Real Estate",
  },
  {
    id: "17", // Kategori 17
    title: "Non-Profit",
  },
  {
    id: "18", // Kategori 18
    title: "Personal Blog",
  },
  {
    id: "19", // Kategori 19
    title: "Gaming",
  },
  {
    id: "20", // Kategori 20
    title: "Automotive",
  },
];

const templates: Prisma.TemplateCreateInput[] = [
  {
    id: "1",
    title: "Elegant Wedding Invitation",
    price: 200000,
    description: "A beautiful and customizable wedding invitation templates.",
    features: "Custom colors, Multiple languages, RSVP tracking",
    content: "<h1>Welcome to your Wedding Invitation</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 10,
    averageRating: 5,
    templateCategory: {
      connect: { id: "1" }, // Menghubungkan ke templateCategory dengan ID "1"
    },
    createdByUser: {
      connect: { id: "1" }, // Menghubungkan ke user dengan ID "1"
    },
  },
  {
    id: "2",
    title: "Minimalist Business Card",
    price: 50000,
    description: "A sleek and professional business card design.",
    features: "Custom logo, QR code support, Multiple fonts",
    content: "<h1>Your Business, Your Identity</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 25,
    averageRating: 4.8,
    templateCategory: {
      connect: { id: "2" }, // Menghubungkan ke templateCategory dengan ID "2"
    },
    createdByUser: {
      connect: { id: "2" }, // Menghubungkan ke user dengan ID "2"
    },
  },
  {
    id: "3",
    title: "Vintage Poster Design",
    price: 120000,
    description: "A retro-style poster template for events and promotions.",
    features: "Editable layers, High resolution, Print-ready",
    content: "<h1>Classic and Timeless</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 15,
    averageRating: 4.6,
    templateCategory: {
      connect: { id: "3" }, // Menghubungkan ke templateCategory dengan ID "3"
    },
    createdByUser: {
      connect: { id: "3" }, // Menghubungkan ke user dengan ID "3"
    },
  },
  {
    id: "4",
    title: "Modern Resume Template",
    price: 80000,
    description: "A clean and well-structured resume template.",
    features: "ATS-friendly, Customizable sections, Multiple color themes",
    content: "<h1>Stand Out in Your Job Search</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 40,
    averageRating: 4.9,
    templateCategory: {
      connect: { id: "4" }, // Menghubungkan ke templateCategory dengan ID "4"
    },
    createdByUser: {
      connect: { id: "4" }, // Menghubungkan ke user dengan ID "4"
    },
  },
  {
    id: "5",
    title: "Creative Portfolio Website",
    price: 300000,
    description: "A portfolio template for designers and creatives.",
    features: "Responsive layout, Custom galleries, Contact form",
    content: "<h1>Showcase Your Best Work</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 8,
    averageRating: 4.7,
    templateCategory: {
      connect: { id: "5" }, // Menghubungkan ke templateCategory dengan ID "5"
    },
    createdByUser: {
      connect: { id: "5" }, // Menghubungkan ke user dengan ID "5"
    },
  },
  {
    id: "6",
    title: "Travel Blog Template",
    price: 180000,
    description: "Designed for travel bloggers and photographers.",
    features: "Gallery, Blog layout",
    content: "<h1>Share Your Adventures</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 12,
    averageRating: 4,
    templateCategory: {
      connect: { id: "10" }, // Menghubungkan ke templateCategory dengan ID "10"
    },
    createdByUser: {
      connect: { id: "10" }, // Menghubungkan ke user dengan ID "10"
    },
  },
  {
    id: "7",
    title: "Photography Portfolio",
    price: 220000,
    description: "Ideal for photographers to showcase their work.",
    features: "Full-screen gallery, Lightbox",
    content: "<h1>Photography Showcase</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 9,
    averageRating: 5,
    templateCategory: {
      connect: { id: "11" }, // Menghubungkan ke templateCategory dengan ID "11"
    },
    createdByUser: {
      connect: { id: "11" }, // Menghubungkan ke user dengan ID "11"
    },
  },
  {
    id: "8",
    title: "Restaurant Menu Template",
    price: 120000,
    description: "A modern menu design for restaurants and cafes.",
    features: "Customizable sections, Print-ready",
    content: "<h1>Our Menu</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 18,
    averageRating: 4,
    templateCategory: {
      connect: { id: "12" }, // Menghubungkan ke templateCategory dengan ID "12"
    },
    createdByUser: {
      connect: { id: "12" }, // Menghubungkan ke user dengan ID "12"
    },
  },
  {
    id: "9",
    title: "Online Course Landing Page",
    price: 280000,
    description: "A landing page for online courses and webinars.",
    features: "Course details, Instructor section",
    content: "<h1>Learn with Us</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 25,
    averageRating: 5,
    templateCategory: {
      connect: { id: "13" }, // Menghubungkan ke templateCategory dengan ID "13"
    },
    createdByUser: {
      connect: { id: "13" }, // Menghubungkan ke user dengan ID "13"
    },
  },
  {
    id: "10",
    title: "Minimalist Birthday Invitation",
    price: 150000,
    description: "A sleek, minimalist templates for birthday parties.",
    features: "Minimal design, Custom colors",
    content: "<h1>Join the Celebration</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 5,
    averageRating: 4,
    templateCategory: {
      connect: { id: "6" }, // Menghubungkan ke templateCategory dengan ID "6"
    },
    createdByUser: {
      connect: { id: "6" }, // Menghubungkan ke user dengan ID "6"
    },
  },
  {
    id: "11",
    title: "Classic Business Brochure",
    price: 300000,
    description: "A professional brochure templates for businesses.",
    features: "Corporate design, Print-ready, Easy customization",
    content: "<h1>Your Business Solution</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 15,
    averageRating: 5,
    templateCategory: {
      connect: { id: "7" }, // Menghubungkan ke templateCategory dengan ID "7"
    },
    createdByUser: {
      connect: { id: "7" }, // Menghubungkan ke user dengan ID "7"
    },
  },
  {
    id: "12",
    title: "Luxury Event Invitation",
    price: 500000,
    description: "A luxurious design for high-end events.",
    features: "Gold accents, Custom fonts",
    content: "<h1>You Are Invited</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 20,
    averageRating: 5,
    templateCategory: {
      connect: { id: "8" }, // Menghubungkan ke templateCategory dengan ID "8"
    },
    createdByUser: {
      connect: { id: "8" }, // Menghubungkan ke user dengan ID "8"
    },
  },
  {
    id: "13",
    title: "Modern Portfolio Template",
    price: 250000,
    description: "Perfect for showcasing creative work.",
    features: "Responsive layout, Portfolio grid",
    content: "<h1>Your Portfolio</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 8,
    averageRating: 4,
    templateCategory: {
      connect: { id: "9" }, // Menghubungkan ke templateCategory dengan ID "9"
    },
    createdByUser: {
      connect: { id: "9" }, // Menghubungkan ke user dengan ID "9"
    },
  },

  {
    id: "14",
    title: "Photography Portfolio",
    price: 250000,
    description: "A professional portfolio template for photographers.",
    features: "High-resolution gallery, Fullscreen mode, Social media links",
    content: "<h1>Showcase Your Best Shots</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 12,
    averageRating: 4.9,
    templateCategory: {
      connect: { id: "14" }, // Menghubungkan ke templateCategory dengan ID "14"
    },
    createdByUser: {
      connect: { id: "14" }, // Menghubungkan ke user dengan ID "14"
    },
  },
  {
    id: "15",
    title: "E-commerce Landing Page",
    price: 400000,
    description: "A conversion-optimized landing page for online stores.",
    features: "Product showcase, Call-to-action buttons, Payment integration",
    content: "<h1>Boost Your Sales</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 30,
    averageRating: 4.8,
    templateCategory: {
      connect: { id: "15" }, // Menghubungkan ke templateCategory dengan ID "15"
    },
    createdByUser: {
      connect: { id: "15" }, // Menghubungkan ke user dengan ID "15"
    },
  },
  {
    id: "16",
    title: "Digital Agency Website",
    price: 350000,
    description: "A modern website template for digital agencies.",
    features: "SEO optimized, Client testimonials, Contact form",
    content: "<h1>Grow Your Digital Presence</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 20,
    averageRating: 4.7,
    templateCategory: {
      connect: { id: "16" }, // Menghubungkan ke templateCategory dengan ID "16"
    },
    createdByUser: {
      connect: { id: "16" }, // Menghubungkan ke user dengan ID "16"
    },
  },
  {
    id: "17",
    title: "Tech Conference Flyer",
    price: 100000,
    description: "A stylish and informative flyer for tech events.",
    features: "Editable text, High resolution, Print-ready",
    content: "<h1>Join the Future of Technology</h1>",
    status: TemplateStatus.ON_SALE,
    purchasedTime: 18,
    averageRating: 4.6,
    templateCategory: {
      connect: { id: "17" }, // Menghubungkan ke templateCategory dengan ID "17"
    },
    createdByUser: {
      connect: { id: "17" }, // Menghubungkan ke user dengan ID "17"
    },
  },
];

const testimonials: Prisma.TestimonialsCreateInput[] = [
  {
    id: "1",
    name: "Alice",
    rating: 5,
    message: "Great templates, easy to use!",
    template: {
      connect: { id: "1" },
    },
    user: {
      connect: { email: "johndoe@example.com" },
    },
  },
  {
    id: "2",
    name: "Bob",
    rating: 4,
    message: "Good design, but the customization could be improved.",
    template: {
      connect: { id: "2" },
    },
    user: {
      connect: { email: "alice@example.com" },
    },
  },
  {
    id: "3",
    name: "Charlie",
    rating: 5,
    message: "The templates looks amazing and works perfectly!",
    template: {
      connect: { id: "3" },
    },
    user: {
      connect: { email: "mark@example.com" },
    },
  },
  {
    id: "4",
    name: "David",
    rating: 4,
    message: "Elegant and modern design. Highly recommend it!",
    template: {
      connect: { id: "4" },
    },
    user: {
      connect: { email: "sophia@example.com" },
    },
  },
  {
    id: "5",
    name: "Emma",
    rating: 5,
    message: "Best templates I have ever used for my portfolio!",
    template: {
      connect: { id: "5" },
    },
    user: {
      connect: { email: "emma@example.com" },
    },
  },
  {
    id: "6",
    name: "Frank",
    rating: 4,
    message: "Very easy to set up, but needs more customization options.",
    template: {
      connect: { id: "6" },
    },
    user: {
      connect: { email: "david@example.com" },
    },
  },
  {
    id: "7",
    name: "Grace",
    rating: 5,
    message: "This templates helped me create a stunning travel blog!",
    template: {
      connect: { id: "6" },
    },
    user: {
      connect: { email: "mike@example.com" },
    },
  },
  {
    id: "8",
    name: "Henry",
    rating: 4,
    message: "Beautiful templates, but had a few minor issues at first.",
    template: {
      connect: { id: "7" },
    },
    user: {
      connect: { email: "chris@example.com" },
    },
  },
  {
    id: "9",
    name: "Isabella",
    rating: 5,
    message: "Perfect for showcasing my photography projects!",
    template: {
      connect: { id: "7" },
    },
    user: {
      connect: { email: "lucas@example.com" },
    },
  },
  {
    id: "10",
    name: "Jack",
    rating: 5,
    message: "Great for promoting my online course. Thank you!",
    template: {
      connect: { id: "9" },
    },
    user: {
      connect: { email: "lucas@example.com" },
    },
  },
];

const transactions: Prisma.TransactionCreateInput[] = [
  {
    customer: { connect: { id: "1" } },
    amount: 100000,
    coupon: { connect: { id: "1" } },
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "1" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "PENDING",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "1" } },
  },
  {
    customer: { connect: { id: "2" } },
    amount: 100000,
    coupon: undefined,
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "2" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "SUCCESS",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "2" } },
  },
  {
    customer: { connect: { id: "3" } },
    amount: 100000,
    coupon: { connect: { id: "3" } },
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "3" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "SUCCESS",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "3" } },
  },
  {
    customer: { connect: { id: "4" } },
    amount: 100000,
    coupon: undefined,
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "4" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "PENDING",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "4" } },
  },
  {
    customer: { connect: { id: "5" } },
    amount: 100000,
    coupon: { connect: { id: "5" } },
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "5" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "SUCCESS",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "5" } },
  },
  {
    customer: { connect: { id: "6" } },
    amount: 100000,
    coupon: undefined,
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "6" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "SUCCESS",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "6" } },
  },
  {
    customer: { connect: { id: "7" } },
    amount: 100000,
    coupon: { connect: { id: "1" } },
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "7" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "PENDING",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "7" } },
  },
  {
    customer: { connect: { id: "8" } },
    amount: 100000,
    coupon: undefined,
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "8" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "SUCCESS",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "8" } },
  },
  {
    customer: { connect: { id: "9" } },
    amount: 100000,
    coupon: { connect: { id: "2" } },
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "9" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "SUCCESS",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "9" } },
  },
  {
    customer: { connect: { id: "10" } },
    amount: 100000,
    coupon: undefined,
    TemplateTransaction: {
      create: [
        {
          template: { connect: { id: "10" } },
        },
      ],
    },
    PaymentHistory: {
      create: [
        {
          paidAt: new Date(),
          status: "PENDING",
          expiredAt: new Date(new Date().setDate(new Date().getDate() + 7)),
        },
      ],
    },
    Testimonials: { connect: { id: "10" } },
  },
];

const websites: Prisma.WebsiteCreateInput[] = [
  {
    id: "1", // Website 1
    websiteName: "My Wedding Website",
    owner: { connect: { id: "1" } }, // Menghubungkan ke user dengan ID "1"
    content:
      "<h1>Welcome to Our Wedding!</h1><p>We are excited to celebrate our special day with you.</p>",
    isPublic: true,
    template: { connect: { id: "1" } }, // Menghubungkan ke template dengan ID "1"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "2", // Website 2
    websiteName: "John's Photography Portfolio",
    owner: { connect: { id: "2" } }, // Menghubungkan ke user dengan ID "2"
    content: "<h1>John's Photography</h1><p>Capturing moments that matter.</p>",
    isPublic: true,
    template: { connect: { id: "2" } }, // Menghubungkan ke template dengan ID "2"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "3", // Website 3
    websiteName: "Jane's Bakery",
    owner: { connect: { id: "3" } }, // Menghubungkan ke user dengan ID "3"
    content:
      "<h1>Welcome to Jane's Bakery</h1><p>Freshly baked goods every day!</p>",
    isPublic: true,
    template: { connect: { id: "3" } }, // Menghubungkan ke template dengan ID "3"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "4", // Website 4
    websiteName: "Tech Conference 2023",
    owner: { connect: { id: "4" } }, // Menghubungkan ke user dengan ID "4"
    content:
      "<h1>Tech Conference 2023</h1><p>Join us for the biggest tech event of the year!</p>",
    isPublic: true,
    template: { connect: { id: "4" } }, // Menghubungkan ke template dengan ID "4"
    expiredAt: new Date(new Date().setMonth(new Date().getMonth() + 6)), // Kedaluwarsa 6 bulan dari sekarang
  },
  {
    id: "5", // Website 5
    websiteName: "Travel Blog by Alice",
    owner: { connect: { id: "5" } }, // Menghubungkan ke user dengan ID "5"
    content:
      "<h1>Alice's Travel Blog</h1><p>Exploring the world, one destination at a time.</p>",
    isPublic: true,
    template: { connect: { id: "5" } }, // Menghubungkan ke template dengan ID "5"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "6", // Website 6
    websiteName: "Fitness Hub",
    owner: { connect: { id: "6" } }, // Menghubungkan ke user dengan ID "6"
    content:
      "<h1>Fitness Hub</h1><p>Your journey to a healthier lifestyle starts here.</p>",
    isPublic: true,
    template: { connect: { id: "6" } }, // Menghubungkan ke template dengan ID "6"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "7", // Website 7
    websiteName: "Luxury Events",
    owner: { connect: { id: "7" } }, // Menghubungkan ke user dengan ID "7"
    content: "<h1>Luxury Events</h1><p>Creating unforgettable experiences.</p>",
    isPublic: true,
    template: { connect: { id: "7" } }, // Menghubungkan ke template dengan ID "7"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "8", // Website 8
    websiteName: "Online Course Platform",
    owner: { connect: { id: "8" } }, // Menghubungkan ke user dengan ID "8"
    content:
      "<h1>Learn With Us</h1><p>Expand your knowledge with our online courses.</p>",
    isPublic: true,
    template: { connect: { id: "8" } }, // Menghubungkan ke template dengan ID "8"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "9", // Website 9
    websiteName: "Eco-Friendly Store",
    owner: { connect: { id: "9" } }, // Menghubungkan ke user dengan ID "9"
    content:
      "<h1>Eco-Friendly Store</h1><p>Sustainable products for a better future.</p>",
    isPublic: true,
    template: { connect: { id: "9" } }, // Menghubungkan ke template dengan ID "9"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
  {
    id: "10", // Website 10
    websiteName: "Creative Agency",
    owner: { connect: { id: "10" } }, // Menghubungkan ke user dengan ID "10"
    content: "<h1>Creative Agency</h1><p>We bring your ideas to life.</p>",
    isPublic: true,
    template: { connect: { id: "10" } }, // Menghubungkan ke template dengan ID "10"
    expiredAt: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Kedaluwarsa 1 tahun dari sekarang
  },
];

const rsvps: Prisma.RSVPCreateInput[] = [
  // RSVP untuk Website 1 (ID: "1")
  {
    id: "1", // RSVP 1
    website: { connect: { id: "1" } }, // Menghubungkan ke website dengan ID "1"
    name: "Alice Johnson",
    status: "ATTEND",
    message: "Looking forward to the wedding!",
  },
  {
    id: "2", // RSVP 2
    website: { connect: { id: "1" } }, // Menghubungkan ke website dengan ID "1"
    name: "Bob Smith",
    status: "NOT_ATTEND",
    message: "Sorry, I have a prior commitment.",
  },

  // RSVP untuk Website 2 (ID: "2")
  {
    id: "3", // RSVP 3
    website: { connect: { id: "2" } }, // Menghubungkan ke website dengan ID "2"
    name: "Charlie Brown",
    status: "ATTEND",
    message: "Can't wait to see your portfolio!",
  },
  {
    id: "4", // RSVP 4
    website: { connect: { id: "2" } }, // Menghubungkan ke website dengan ID "2"
    name: "Diana Prince",
    status: "UNCERTAIN",
    message: "I'll let you know closer to the date.",
  },

  // RSVP untuk Website 3 (ID: "3")
  {
    id: "5", // RSVP 5
    website: { connect: { id: "3" } }, // Menghubungkan ke website dengan ID "3"
    name: "Eve Adams",
    status: "ATTEND",
    message: "Excited to try your baked goods!",
  },
  {
    id: "6", // RSVP 6
    website: { connect: { id: "3" } }, // Menghubungkan ke website dengan ID "3"
    name: "Frank White",
    status: "NOT_ATTEND",
    message: "Unfortunately, I can't make it.",
  },

  // RSVP untuk Website 4 (ID: "4")
  {
    id: "7", // RSVP 7
    website: { connect: { id: "4" } }, // Menghubungkan ke website dengan ID "4"
    name: "Grace Lee",
    status: "ATTEND",
    message: "Looking forward to the tech talks!",
  },
  {
    id: "8", // RSVP 8
    website: { connect: { id: "4" } }, // Menghubungkan ke website dengan ID "4"
    name: "Henry Ford",
    status: "UNCERTAIN",
    message: "I might have a conflict that day.",
  },

  // RSVP untuk Website 5 (ID: "5")
  {
    id: "9", // RSVP 9
    website: { connect: { id: "5" } }, // Menghubungkan ke website dengan ID "5"
    name: "Ivy Green",
    status: "ATTEND",
    message: "Love your travel stories!",
  },
  {
    id: "10", // RSVP 10
    website: { connect: { id: "5" } }, // Menghubungkan ke website dengan ID "5"
    name: "Jack Black",
    status: "NOT_ATTEND",
    message: "Wish I could be there!",
  },

  // RSVP untuk Website 6 (ID: "6")
  {
    id: "11", // RSVP 11
    website: { connect: { id: "6" } }, // Menghubungkan ke website dengan ID "6"
    name: "Karen White",
    status: "ATTEND",
    message: "Ready to get fit!",
  },
  {
    id: "12", // RSVP 12
    website: { connect: { id: "6" } }, // Menghubungkan ke website dengan ID "6"
    name: "Leo Garcia",
    status: "UNCERTAIN",
    message: "I'll confirm later.",
  },

  // RSVP untuk Website 7 (ID: "7")
  {
    id: "13", // RSVP 13
    website: { connect: { id: "7" } }, // Menghubungkan ke website dengan ID "7"
    name: "Mia Johnson",
    status: "ATTEND",
    message: "Excited for the event!",
  },
  {
    id: "14", // RSVP 14
    website: { connect: { id: "7" } }, // Menghubungkan ke website dengan ID "7"
    name: "Noah Brown",
    status: "NOT_ATTEND",
    message: "Sorry, I can't make it.",
  },

  // RSVP untuk Website 8 (ID: "8")
  {
    id: "15", // RSVP 15
    website: { connect: { id: "8" } }, // Menghubungkan ke website dengan ID "8"
    name: "Olivia Davis",
    status: "ATTEND",
    message: "Can't wait to learn new things!",
  },
  {
    id: "16", // RSVP 16
    website: { connect: { id: "8" } }, // Menghubungkan ke website dengan ID "8"
    name: "Peter Wilson",
    status: "UNCERTAIN",
    message: "I'll check my schedule.",
  },

  // RSVP untuk Website 9 (ID: "9")
  {
    id: "17", // RSVP 17
    website: { connect: { id: "9" } }, // Menghubungkan ke website dengan ID "9"
    name: "Quinn Evans",
    status: "ATTEND",
    message: "Love your eco-friendly products!",
  },
  {
    id: "18", // RSVP 18
    website: { connect: { id: "9" } }, // Menghubungkan ke website dengan ID "9"
    name: "Rachel Green",
    status: "NOT_ATTEND",
    message: "Wish I could support!",
  },

  // RSVP untuk Website 10 (ID: "10")
  {
    id: "19", // RSVP 19
    website: { connect: { id: "10" } }, // Menghubungkan ke website dengan ID "10"
    name: "Sam Taylor",
    status: "ATTEND",
    message: "Excited to see your creative work!",
  },
  {
    id: "20", // RSVP 20
    website: { connect: { id: "10" } }, // Menghubungkan ke website dengan ID "10"
    name: "Tina Moore",
    status: "UNCERTAIN",
    message: "I'll let you know soon.",
  },
];

async function main() {
  for (const role of roles) {
    await prisma.role.create({ data: role });
  }

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  for (const coupon of coupons) {
    await prisma.coupon.create({ data: coupon });
  }

  for (const templateCategory of templateCategories) {
    await prisma.templateCategory.create({ data: templateCategory });
  }

  for (const template of templates) {
    await prisma.template.create({ data: template });
  }

  for (const testimonial of testimonials) {
    await prisma.testimonials.create({ data: testimonial });
  }

  for (const transaction of transactions) {
    await prisma.transaction.create({ data: transaction });
  }

  for (const website of websites) {
    await prisma.website.create({ data: website });
  }

  for (const rsvp of rsvps) {
    await prisma.rSVP.create({ data: rsvp });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

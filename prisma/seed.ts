import { TemplateStatus, PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

const hashedPassword = "passowrd";

const templates: Prisma.TemplateCreateInput[] = [
  {
    id: "1",
    title: 'Elegant Wedding Invitation',
    price: 200000,
    description: 'A beautiful and customizable wedding invitation templates.',
    features: 'Custom colors, Multiple languages, RSVP tracking',
    content: '<h1>Welcome to your Wedding Invitation</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 10,
    averageRating: 5,
    templateCategory: {
      connectOrCreate: {
        where: { id: "1" },
        create: { title: "Modern" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'johndoe@example.com' },
        create: {
          name: 'John Doe',
          username: 'johndoe',
          email: 'johndoe@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "2",
    title: 'Minimalist Birthday Invitation',
    price: 150000,
    description: 'A sleek, minimalist templates for birthday parties.',
    features: 'Minimal design, Custom colors',
    content: '<h1>Join the Celebration</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 5,
    averageRating: 4,
    templateCategory: {
      connectOrCreate: {
        where: { id: "2" },
        create: { title: "Minimalist" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'alice@example.com' },
        create: {
          name: 'Alice Johnson',
          username: 'alicejohnson',
          email: 'alice@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "3",
    title: 'Classic Business Brochure',
    price: 300000,
    description: 'A professional brochure templates for businesses.',
    features: 'Corporate design, Print-ready, Easy customization',
    content: '<h1>Your Business Solution</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 15,
    averageRating: 5,
    templateCategory: {
      connectOrCreate: {
        where: { id: "3" },
        create: { title: "Business" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'mark@example.com' },
        create: {
          name: 'Mark Smith',
          username: 'marksmith',
          email: 'mark@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "4",
    title: 'Luxury Event Invitation',
    price: 500000,
    description: 'A luxurious design for high-end events.',
    features: 'Gold accents, Custom fonts',
    content: '<h1>You Are Invited</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 20,
    averageRating: 5,
    templateCategory: {
      connectOrCreate: {
        where: { id: "4" },
        create: { title: "Luxury" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'sophia@example.com' },
        create: {
          name: 'Sophia Lee',
          username: 'sophialee',
          email: 'sophia@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "5",
    title: 'Modern Portfolio Template',
    price: 250000,
    description: 'Perfect for showcasing creative work.',
    features: 'Responsive layout, Portfolio grid',
    content: '<h1>Your Portfolio</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 8,
    averageRating: 4,
    templateCategory: {
      connectOrCreate: {
        where: { id: "5" },
        create: { title: "Portfolio" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'emma@example.com' },
        create: {
          name: 'Emma Brown',
          username: 'emmabrown',
          email: 'emma@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "6",
    title: 'Travel Blog Template',
    price: 180000,
    description: 'Designed for travel bloggers and photographers.',
    features: 'Gallery, Blog layout',
    content: '<h1>Share Your Adventures</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 12,
    averageRating: 4,
    templateCategory: {
      connectOrCreate: {
        where: { id: "6" },
        create: { title: "Travel" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'david@example.com' },
        create: {
          name: 'David Wilson',
          username: 'davidwilson',
          email: 'david@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "7",
    title: 'Photography Portfolio',
    price: 220000,
    description: 'Ideal for photographers to showcase their work.',
    features: 'Full-screen gallery, Lightbox',
    content: '<h1>Photography Showcase</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 9,
    averageRating: 5,
    templateCategory: {
      connectOrCreate: {
        where: { id: "7" },
        create: { title: "Photography" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'mike@example.com' },
        create: {
          name: 'Mike Taylor',
          username: 'miketaylor',
          email: 'mike@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "8",
    title: 'Restaurant Menu Template',
    price: 120000,
    description: 'A modern menu design for restaurants and cafes.',
    features: 'Customizable sections, Print-ready',
    content: '<h1>Our Menu</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 18,
    averageRating: 4,
    templateCategory: {
      connectOrCreate: {
        where: { id: "8" },
        create: { title: "Food & Drink" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'chris@example.com' },
        create: {
          name: 'Chris Johnson',
          username: 'chrisjohnson',
          email: 'chris@example.com',
          password: hashedPassword
        }
      }
    }
  },
  {
    id: "9",
    title: 'Online Course Landing Page',
    price: 280000,
    description: 'A landing page for online courses and webinars.',
    features: 'Course details, Instructor section',
    content: '<h1>Learn with Us</h1>',
    status: TemplateStatus.ON_SALE,
    purchasedTime: 25,
    averageRating: 5,
    templateCategory: {
      connectOrCreate: {
        where: { id: "9" },
        create: { title: "Education" }
      }
    },
    createdByUser: {
      connectOrCreate: {
        where: { email: 'lucas@example.com' },
        create: {
          name: 'Lucas Martin',
          username: 'lucasmartin',
          email: 'lucas@example.com',
          password: hashedPassword
        }
      }
    }
  }
];

const testimonials: Prisma.TestimonialsCreateInput[] = [
  {
    name: 'Alice',
    rating: 5,
    message: 'Great templates, easy to use!',
    template: {
      connect: { id: '1' }
    },
    user: {
      connect: { email: 'johndoe@example.com' }
    }
  },
  {
    name: 'Bob',
    rating: 4,
    message: 'Good design, but the customization could be improved.',
    template: {
      connect: { id: '2' }
    },
    user: {
      connect: { email: 'alice@example.com' }
    }
  },
  {
    name: 'Charlie',
    rating: 5,
    message: 'The templates looks amazing and works perfectly!',
    template: {
      connect: { id: '3' }
    },
    user: {
      connect: { email: 'mark@example.com' }
    }
  },
  {
    name: 'David',
    rating: 4,
    message: 'Elegant and modern design. Highly recommend it!',
    template: {
      connect: { id: '4' }
    },
    user: {
      connect: { email: 'sophia@example.com' }
    }
  },
  {
    name: 'Emma',
    rating: 5,
    message: 'Best templates I have ever used for my portfolio!',
    template: {
      connect: { id: '5' }
    },
    user: {
      connect: { email: 'emma@example.com' }
    }
  },
  {
    name: 'Frank',
    rating: 4,
    message: 'Very easy to set up, but needs more customization options.',
    template: {
      connect: { id: '6' }
    },
    user: {
      connect: { email: 'david@example.com' }
    }
  },
  {
    name: 'Grace',
    rating: 5,
    message: 'This templates helped me create a stunning travel blog!',
    template: {
      connect: { id: '6' }
    },
    user: {
      connect: { email: 'mike@example.com' }
    }
  },
  {
    name: 'Henry',
    rating: 4,
    message: 'Beautiful templates, but had a few minor issues at first.',
    template: {
      connect: { id: '7' }
    },
    user: {
      connect: { email: 'chris@example.com' }
    }
  },
  {
    name: 'Isabella',
    rating: 5,
    message: 'Perfect for showcasing my photography projects!',
    template: {
      connect: { id: '7' }
    },
    user: {
      connect: { email: 'lucas@example.com' }
    }
  },
  {
    name: 'Jack',
    rating: 5,
    message: 'Great for promoting my online course. Thank you!',
    template: {
      connect: { id: '9' }
    },
    user: {
      connect: { email: 'lucas@example.com' }
    }
  }
];


async function main() {

  for(const template of templates) {
    await prisma.template.create({ data: template })
  }

  for(const testimonial of testimonials) {
    await prisma.testimonials.create({ data: testimonial })
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

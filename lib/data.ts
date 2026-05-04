export type Product = {
  id: number; slug: string; name: string
  price: number; category: string; rating: number
  image: string; stock: number; available: boolean
}

export type Post = {
  id: number; slug: string; title: string
  excerpt: string; author: string; date: string
  readingTime: string; category: string; content: string
}

export type Task = { id: string; title: string; done: boolean }

export const products: Product[] = [
  { id:1, slug:"phone",      name:"Smartphone",    price:499, category:"Electronics", rating:4.5, image:"https://picsum.photos/seed/phone/400/300",      stock:12, available:true  },
  { id:2, slug:"laptop",     name:"Laptop",        price:999, category:"Electronics", rating:4.8, image:"https://picsum.photos/seed/laptop/400/300",     stock:5,  available:true  },
  { id:3, slug:"shoes",      name:"Running Shoes", price:89,  category:"Apparel",     rating:4.2, image:"https://picsum.photos/seed/shoes/400/300",      stock:0,  available:false },
  { id:4, slug:"watch",      name:"Smart Watch",   price:299, category:"Electronics", rating:4.6, image:"https://picsum.photos/seed/watch/400/300",      stock:8,  available:true  },
  { id:5, slug:"bag",        name:"Backpack",      price:59,  category:"Apparel",     rating:4.0, image:"https://picsum.photos/seed/bag/400/300",        stock:20, available:true  },
  { id:6, slug:"headphones", name:"Headphones",    price:149, category:"Electronics", rating:4.7, image:"https://picsum.photos/seed/headphones/400/300", stock:15, available:true  },
]

export const posts: Post[] = [
  { id:1, slug:"react-basics",       title:"React Basics",        excerpt:"Learn React from scratch",   author:"Ali",  date:"2024-01-10", readingTime:"5 min", category:"React",      content:"React is a JavaScript library for building UIs. It uses components, props, and state to create interactive interfaces."  },
  { id:2, slug:"nextjs-routing",     title:"Next.js App Router",  excerpt:"Master file-based routing", author:"Sara", date:"2024-02-15", readingTime:"7 min", category:"Next.js",    content:"The App Router uses the file system to define routes. Each folder maps to a URL segment and page.tsx defines the UI."  },
  { id:3, slug:"typescript-tips",    title:"TypeScript Tips",     excerpt:"Write safer JavaScript",    author:"Mona", date:"2024-03-01", readingTime:"4 min", category:"TypeScript", content:"TypeScript adds static types to JavaScript. Use interfaces for object shapes and generics for reusable utilities."  },
  { id:4, slug:"tailwind-layouts",   title:"Tailwind Layouts",    excerpt:"Build fast with utility CSS",author:"Adam", date:"2024-03-20", readingTime:"6 min", category:"CSS",        content:"Tailwind CSS provides utility classes to build responsive layouts quickly without leaving your HTML."  },
  { id:5, slug:"server-components",  title:"Server Components",   excerpt:"The future of React",       author:"Lina", date:"2024-04-05", readingTime:"8 min", category:"Next.js",    content:"Server Components render on the server, reducing the JavaScript bundle sent to the client for better performance."  },
  { id:6, slug:"api-routes",         title:"API Route Handlers",  excerpt:"Build APIs with Next.js",   author:"Ali",  date:"2024-04-20", readingTime:"5 min", category:"API",        content:"Route Handlers replace the old pages/api directory. They use the Web standard Request/Response objects."  },
]

export let tasks: Task[] = [
  { id:"1", title:"Buy groceries", done:false },
  { id:"2", title:"Read a book",   done:true  },
  { id:"3", title:"Exercise",      done:false },
]

export const galleryImages = Array.from({length:9}, (_, i) => ({
  id: i+1,
  src: `https://picsum.photos/seed/${i+10}/600/400`,
  alt: `Gallery image ${i+1}`,
}))

export const navLinks = [
  { href:"/",         label:"Home"     },
  { href:"/about",    label:"About"    },
  { href:"/services", label:"Services" },
  { href:"/products", label:"Products" },
  { href:"/blog",     label:"Blog"     },
  { href:"/contact",  label:"Contact"  },
]

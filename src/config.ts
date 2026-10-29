export interface SiteConfig {
  language: string
  title: string
  description: string
  brandName: string
}

export interface HeroConfig {
  titleText: string
  subtitleLines: string[]
  ctaLabel: string
  roomLabel: string
  fluidImagePath: string
}

export interface WorkItem {
  id: string
  title: string
  type: string
  status: string
  metrics: string
  image: string
  artist: string
  location: string
  medium: string
  article: string
}

export interface GalleryConfig {
  eyebrowLabel: string
  titleLines: string[]
  stats: { label: string; value: string }[]
  sideLabel: string
  works: WorkItem[]
}

export interface InstantConfig {
  textLines: [string, string, string] | string[]
  videoPath: string
  roomLabel: string
}

export interface NavLink {
  label: string
  href?: string
}

export interface FooterConfig {
  brandText: string
  taglineLines: string[]
  navigationHeading: string
  navigationLinks: NavLink[]
  contactHeading: string
  contactLinks: NavLink[]
  copyright: string
  creditText: string
}

export interface WorkDetailConfig {
  backLabel: string
  artistLabel: string
  locationLabel: string
  mediumLabel: string
  backToGalleryLabel: string
  metaRoomSuffix: string
  footerNote: string
  notFoundTitle: string
  notFoundLink: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "MODERN STACK // Digital Exhibition",
  description: "An exhibition of modern development technologies: Rust, Go, Next.js, and Bun. Explore the tools shaping software in the 2020s.",
  brandName: "MODERN STACK",
}

export const heroConfig: HeroConfig = {
  titleText: "MODERN STACK",
  subtitleLines: [
    "Four technologies redefining how we build software in the 2020s.",
    "From systems programming to full-stack frameworks, each represents a different philosophy of speed, safety, and developer experience.",
    "Walk through the gallery. Observe the details. Choose your tools.",
  ],
  ctaLabel: "Enter Exhibition",
  roomLabel: "Room 01 // The Stack",
  fluidImagePath: "/images/hero-source.jpg",
}

export const galleryConfig: GalleryConfig = {
  eyebrowLabel: "ROOM 02 // GALLERY",
  titleLines: ["Selected", "Works"],
  stats: [
    { label: "Languages", value: "Rust, Go" },
    { label: "Frameworks", value: "Next.js" },
    { label: "Runtimes", value: "Bun" },
    { label: "Total Works", value: "16" },
    { label: "Exhibition", value: "2026" },
  ],
  sideLabel: "STACK::ROOM_02",
  works: [
    {
      id: "RS-001",
      title: "BORROW_CHECKER",
      type: "rust-core",
      status: "ON VIEW",
      metrics: "2010",
      image: "/images/work-rust-001.jpg",
      artist: "Mozilla Research",
      location: "Graydon Hoare",
      medium: "Systems language, compile-time memory safety",
      article: "The borrow checker is Rust's most iconic innovation. It enforces memory safety at compile time without needing a garbage collector, fundamentally changing how systems programmers think about ownership and lifetimes.\n\nBy tracking which parts of code own, borrow, or mutate data, the compiler prevents entire classes of bugs: use-after-free, double-free, and data races. This is not a runtime check — it is a zero-cost abstraction that disappears after compilation.\n\nWhat began as an experimental language feature has become the gold standard for memory-safe systems programming, influencing the design of new languages and the security posture of operating systems worldwide.",
    },
    {
      id: "RS-002",
      title: "ZERO_COST",
      type: "rust-abstract",
      status: "ON VIEW",
      metrics: "2015",
      image: "/images/work-rust-002.jpg",
      artist: "Rust Team",
      location: "Global",
      medium: "Abstraction without runtime overhead",
      article: "Zero-cost abstractions are the promise that high-level, expressive code compiles down to the same machine instructions as hand-written low-level code. In Rust, generics, iterators, and closures carry no runtime penalty.\n\nThis principle bridges the gap between systems performance and developer ergonomics. You can write code that reads like Python and runs like C, because the compiler optimizes away the abstraction at compile time.\n\nThe result is a language where safety and speed are not traded off but unified — where the compiler works harder so the runtime does not have to.",
    },
    {
      id: "RS-003",
      title: "CARGO_BUILD",
      type: "rust-tooling",
      status: "ON VIEW",
      metrics: "2014",
      image: "/images/work-rust-003.jpg",
      artist: "Rust Community",
      location: "Crates.io",
      medium: "Package manager, build tool, test runner",
      article: "Cargo is more than a package manager — it is the unified interface to the entire Rust ecosystem. With a single command, it builds projects, resolves dependencies, runs tests, generates documentation, and publishes crates.\n\nIts design philosophy of convention over configuration means that every Rust project looks familiar once you understand the layout. The crates.io registry hosts over 150,000 packages, forming one of the most curated open-source ecosystems in modern software.\n\nBy integrating build, test, and distribution into one tool, Cargo eliminates the toolchain fragmentation that plagues other systems languages.",
    },
    {
      id: "RS-004",
      title: "MEMORY_SAFE",
      type: "rust-guarantee",
      status: "ON VIEW",
      metrics: "2024",
      image: "/images/work-rust-004.jpg",
      artist: "Rust Foundation",
      location: "Linux Kernel",
      medium: "Compile-time safety guarantees",
      article: "Memory safety vulnerabilities account for the majority of critical security bugs in systems software. Rust eliminates these bugs entirely by enforcing safe patterns at compile time, turning runtime crashes into build-time errors.\n\nMajor technology companies and government agencies have adopted Rust for this reason. The Linux kernel now accepts Rust drivers. Microsoft, Google, and Amazon use it for foundational infrastructure.\n\nThis work represents a shift in the industry: safety is no longer an afterthought but a compiler-guaranteed property of the code itself.",
    },
    {
      id: "GO-001",
      title: "GOROUTINES",
      type: "go-concurrent",
      status: "ON VIEW",
      metrics: "2009",
      image: "/images/work-go-001.jpg",
      artist: "Google",
      location: "Robert Griesemer",
      medium: "Lightweight concurrent threads",
      article: "Goroutines are Go's answer to concurrent programming: threads so lightweight that a single program can run millions of them simultaneously. They start with a 2KB stack that grows and shrinks dynamically, managed entirely by the Go runtime.\n\nUnlike operating system threads, goroutines are multiplexed onto a small pool of OS threads by the scheduler, making concurrency cheap and scalable. The go keyword turns any function call into an independent concurrent operation.\n\nThis model has become the template for modern concurrency, influencing the design of async runtimes across the industry.",
    },
    {
      id: "GO-002",
      title: "CHANNELS",
      type: "go-communicate",
      status: "ON VIEW",
      metrics: "2009",
      image: "/images/work-go-002.jpg",
      artist: "Google",
      location: "Rob Pike",
      medium: "CSP message passing",
      article: "Channels are the conduits through which goroutines communicate. Inspired by Tony Hoare's Communicating Sequential Processes, they embody Go's philosophy: do not communicate by sharing memory; share memory by communicating.\n\nBy passing values over typed channels, concurrent code becomes explicit about data flow. Buffered channels allow asynchronous handoffs; unbuffered channels create synchronization points. Select statements wait on multiple channels, enabling complex coordination patterns.\n\nThis approach to concurrency has proven especially effective in network services, where thousands of goroutines handle connections that pass messages through channels rather than fighting over locks.",
    },
    {
      id: "GO-003",
      title: "CLOUD_NATIVE",
      type: "go-infrastructure",
      status: "ON VIEW",
      metrics: "2014",
      image: "/images/work-go-003.jpg",
      artist: "Cloud Community",
      location: "Kubernetes",
      medium: "Distributed systems infrastructure",
      article: "Go has become the lingua franca of cloud infrastructure. Docker, Kubernetes, Terraform, Prometheus, and etcd are all written in Go. The language's fast compilation, static binaries, and built-in concurrency make it ideal for building the tools that run modern infrastructure.\n\nA Go program compiles to a single binary with no runtime dependencies, making deployment trivial. The standard library includes production-quality HTTP servers, and the concurrency model maps naturally to the request-response cycle of network services.\n\nThis ecosystem has defined the architecture of the cloud-native era, and Go remains at its center.",
    },
    {
      id: "GO-004",
      title: "FAST_COMPILE",
      type: "go-speed",
      status: "ON VIEW",
      metrics: "2023",
      image: "/images/work-go-004.jpg",
      artist: "Go Team",
      location: "Google",
      medium: "Sub-second build times",
      article: "Fast compilation is one of Go's most underrated features. A large Go codebase compiles in seconds, not minutes. This is achieved through a deliberately simple syntax, fast dependency resolution, and an optimizing compiler designed for throughput over peak optimization.\n\nThe language avoids features that slow down compilation: no header files, no complex generics, no deep inheritance hierarchies. The result is a tight edit-compile-test loop that keeps developers in flow state.\n\nIn an era where build times can stretch into hours for other languages, Go proves that compilation speed is a feature worth designing for from the ground up.",
    },
    {
      id: "NX-001",
      title: "APP_ROUTER",
      type: "next-routing",
      status: "ON VIEW",
      metrics: "2023",
      image: "/images/work-next-001.jpg",
      artist: "Vercel",
      location: "Sebastian Markbage",
      medium: "Nested layout routing system",
      article: "The App Router is Next.js's reimagining of how web applications navigate. Built on React Server Components and nested layouts, it allows URL segments to correspond to nested UI components that preserve state and load incrementally.\n\nUnlike traditional client-side routing, the App Router can render on the server, stream HTML to the client, and interleave interactive islands of client components within static server shells. Loading and error states are declarative, defined at the layout level.\n\nThis architecture collapses the distinction between multi-page and single-page applications, offering the SEO and performance of server rendering with the interactivity of client-side navigation.",
    },
    {
      id: "NX-002",
      title: "SERVER_COMP",
      type: "next-react",
      status: "ON VIEW",
      metrics: "2022",
      image: "/images/work-next-002.jpg",
      artist: "React Team",
      location: "Meta / Vercel",
      medium: "Server-side React components",
      article: "React Server Components allow components to render exclusively on the server, sending only their serialized output to the client. This means zero client-side JavaScript for static content, dramatically reducing bundle sizes.\n\nServer Components can access backend resources directly — databases, file systems, private APIs — without exposing that logic to the browser. Client Components, marked explicitly, handle interactivity where needed.\n\nThis split-component model represents a fundamental shift in React architecture, marrying the component model of frontend development with the data access patterns of backend development.",
    },
    {
      id: "NX-003",
      title: "FULL_STACK",
      type: "next-platform",
      status: "ON VIEW",
      metrics: "2024",
      image: "/images/work-next-003.jpg",
      artist: "Vercel",
      location: "San Francisco",
      medium: "Unified full-stack web platform",
      article: "Next.js has evolved from a React framework into a complete full-stack platform. API routes, server actions, edge functions, middleware, and image optimization are all built in and configured by convention.\n\nA single Next.js application can handle everything from static marketing pages to real-time APIs to edge-computed personalization, all within one codebase and deployment. The framework abstracts away the infrastructure, letting developers focus on product logic.\n\nThis convergence of frontend and backend into a unified platform defines the modern web development experience.",
    },
    {
      id: "NX-004",
      title: "VERCEL_EDGE",
      type: "next-deploy",
      status: "ON VIEW",
      metrics: "2021",
      image: "/images/work-next-004.jpg",
      artist: "Vercel",
      location: "Edge Network",
      medium: "Global edge deployment",
      article: "Edge deployment brings computation closer to users by running code at hundreds of points of presence around the world. Next.js on Vercel deploys both static assets and serverless functions to this distributed network.\n\nThe result is sub-100ms latency for dynamic content, regardless of where the user is located. Edge Middleware can run authentication, A/B testing, and geolocation before the page even renders.\n\nThis represents the culmination of the Jamstack evolution: not just static at the edge, but dynamic, personalized, interactive applications running globally at the speed of static files.",
    },
    {
      id: "BN-001",
      title: "FAST_RUNTIME",
      type: "bun-speed",
      status: "ON VIEW",
      metrics: "2022",
      image: "/images/work-bun-001.jpg",
      artist: "Jarred Sumner",
      location: "Bun.sh",
      medium: "JavaScript runtime engine",
      article: "Bun is a JavaScript runtime built from scratch to be fast. Written in Zig and powered by the JavaScriptCore engine, it executes JavaScript and TypeScript with significantly lower startup time and memory usage than existing alternatives.\n\nEvery aspect of the runtime is optimized: the module loader, the event loop, the HTTP server, the WebSocket implementation. Benchmarks show Bun handling multiple times more requests per second with a fraction of the memory footprint.\n\nThis work demonstrates that the JavaScript runtime space still has room for radical performance innovation.",
    },
    {
      id: "BN-002",
      title: "ALL_IN_ONE",
      type: "bun-toolkit",
      status: "ON VIEW",
      metrics: "2023",
      image: "/images/work-bun-002.jpg",
      artist: "Oven.sh",
      location: "Global",
      medium: "Runtime, bundler, test runner, package manager",
      article: "Bun unifies the JavaScript toolchain into a single tool. It is a runtime, a bundler, a test runner, a package manager, and a script runner — all in one binary that installs in seconds.\n\nThis consolidation eliminates the dependency hell of coordinating webpack, jest, npm, and node across different versions and configurations. TypeScript and JSX work out of the box. CommonJS and ESM interop seamlessly.\n\nFor developers, this means less configuration, faster builds, and a toolchain that finally feels like it was designed as a whole rather than assembled from parts.",
    },
    {
      id: "BN-003",
      title: "ZIG_ENGINE",
      type: "bun-core",
      status: "ON VIEW",
      metrics: "2022",
      image: "/images/work-bun-003.jpg",
      artist: "Zig Core",
      location: "Low-level",
      medium: "Zig-powered runtime core",
      article: "Bun is written in Zig, a systems programming language designed for clarity and control. Zig provides manual memory management with compile-time safety checks, cross-compilation as a first-class feature, and a build system that is code, not configuration.\n\nThe choice of Zig over C++ or Rust reflects a deliberate philosophy: the runtime's author should understand every byte of memory and every system call. Zig's explicitness and lack of hidden control flow make this possible.\n\nThis foundation gives Bun both its speed and its small footprint — the entire toolchain ships as a single, self-contained executable.",
    },
    {
      id: "BN-004",
      title: "BUN_INSTALL",
      type: "bun-package",
      status: "ON VIEW",
      metrics: "2023",
      image: "/images/work-bun-004.jpg",
      artist: "Bun Team",
      location: "npm registry",
      medium: "High-speed package installer",
      article: "Bun's package manager installs dependencies up to thirty times faster than npm, thanks to a parallelized, multi-threaded architecture and global disk caching. It reads package.json and installs the entire dependency tree in seconds.\n\nIt is fully compatible with the npm registry, meaning all existing packages work without modification. Workspace support, lifecycle scripts, and lockfiles are all handled correctly.\n\nFor teams waiting on CI pipelines and developers cloning repositories, this speed transforms the daily experience of working with JavaScript projects.",
    },
  ],
}

export const instantConfig: InstantConfig = {
  textLines: ["BUILD", "before the moment compiles", "Capture the architecture of modern software"],
  videoPath: "/videos/ambient.mp4",
  roomLabel: "Room 03 // The Instant",
}

export const footerConfig: FooterConfig = {
  brandText: "MODERN STACK",
  taglineLines: ["FOUR TECHNOLOGIES", "ONE EXHIBITION", "INFINITE POSSIBILITIES"],
  navigationHeading: "NAVIGATION",
  navigationLinks: [
    { label: "The Stack", href: "/" },
    { label: "Selected Works", href: "/#gallery" },
    { label: "The Instant", href: "/#instant" },
  ],
  contactHeading: "CONNECT",
  contactLinks: [
    { label: "GitHub", href: "https://github.com" },
    { label: "Documentation", href: "https://docs.rs" },
  ],
  copyright: "© 2026 MODERN STACK",
  creditText: "BUILT WITH RUST, GO, NEXT & BUN",
}

export const workDetailConfig: WorkDetailConfig = {
  backLabel: "← BACK",
  artistLabel: "Creator",
  locationLabel: "Origin",
  mediumLabel: "Type",
  backToGalleryLabel: "← Back to gallery",
  metaRoomSuffix: "ROOM 02",
  footerNote: "Modern Stack · Room 02",
  notFoundTitle: "404 · Work not found",
  notFoundLink: "← BACK TO GALLERY",
}

// Helper map for WorkDetail lookups
export const worksById: Record<string, WorkItem> = Object.fromEntries(
  galleryConfig.works.map((w) => [w.id.toLowerCase(), w]),
)

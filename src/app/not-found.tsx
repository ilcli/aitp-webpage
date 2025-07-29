import Link from "next/link";
// Optional: Uncomment the next line if using Framer Motion
// import { motion } from "framer-motion";

export default function NotFound() {
  return (
    // Optional animation wrapper — remove comments if using framer-motion
    // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404 🤖</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-md">
          We couldn&apos;t find the page you were looking for. It may have been
          moved, deleted, or never existed. But don&apos;t worry — our AI
          assistants never sleep.
        </p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors"
        >
          ← Return Home
        </Link>
      </div>
    </div>
    // </motion.div>
  );
}

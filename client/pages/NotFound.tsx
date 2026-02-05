import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-600 to-accent flex items-center justify-center px-4">
      <div className="text-center text-white max-w-md">
        <h1 className="text-7xl sm:text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8 text-white/90">
          Oops! The page you're looking for doesn't exist. This could be a new feature we're building or it might have moved.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
            Back to Home
          </Button>
        </Link>
        <p className="mt-8 text-sm text-white/70">
          Want to help us build more pages? Keep prompting for the content you need!
        </p>
      </div>
    </div>
  );
}

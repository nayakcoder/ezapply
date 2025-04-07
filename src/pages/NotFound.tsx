
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
              <FileQuestion className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto">
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

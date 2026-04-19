export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eniola Abonde. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

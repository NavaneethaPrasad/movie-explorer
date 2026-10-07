const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border py-8 text-center">
      <h3 className="text-lg font-semibold text-foreground">
        Movie Explorer
      </h3>

      <p className="mt-2 text-muted-foreground">
        Discover trending, popular and top-rated movies.
      </p>

      <p className="mt-4 text-sm text-muted-foreground">
        Powered by TMDB API • Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
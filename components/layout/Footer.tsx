const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 py-8 text-center">
      <h3 className="text-lg font-semibold text-white">
        Movie Explorer
      </h3>

      <p className="mt-2 text-slate-400">
        Discover trending, popular and top-rated movies.
      </p>

      <p className="mt-4 text-sm text-slate-500">
        Powered by TMDB API • Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
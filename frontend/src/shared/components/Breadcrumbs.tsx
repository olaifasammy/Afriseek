import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm text-brand-muted mb-4">
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <span key={to}>
            <span className="mx-2">/</span>
            {last ? (
              <span className="text-brand-gold">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
            ) : (
              <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

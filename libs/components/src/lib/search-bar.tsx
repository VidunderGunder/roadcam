import React from 'react';

export interface SearchBarProps {
  label?: string;
  icon?: JSX.Element;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const DefaultIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
};

export const SearchBar: React.FC<
  SearchBarProps &
    JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
> = ({ label = 'Search...', icon = DefaultIcon, inputProps, ...props }) => {
  return (
    <div {...props}>
      <div className="form-floating w-100">
        <input
          type="email"
          className="form-control w-100 not-selectable"
          style={{ height: '3rem' }}
          placeholder="..."
          {...inputProps}
        />
        <label
          style={{
            padding: '.9rem',
            paddingTop: '.65rem',
            paddingBottom: 0,
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center' }}
            className={inputProps?.disabled ? 'text-muted' : ''}
          >
            <DefaultIcon />
            <div className="mx-2">{label}</div>
          </div>
        </label>
      </div>
    </div>
  );
};

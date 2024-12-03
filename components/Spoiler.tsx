'use client'

/**
 * This component was taken from usaco.guide, although
 * I am still in the process of tweaking it to work with this site.
 * (functionality works, but CSS is still a bit weird right now.)
 */

import React from 'react';

export interface SpoilerProps {
  title: string;
  /**
   * Whether or not the spoiler should start expanded.
   * Defaults to false.
   */
  startExpanded?: boolean;
  children?: React.ReactNode;
}

const Spoiler = ({
  children,
  title,
  startExpanded = false,
}: SpoilerProps): JSX.Element => {
  const [show, setShow] = React.useState(startExpanded);

  return (
    <div
      className={`bg-gray-50 border-gray-100 dark:border-transparent dark:bg-gray-800 dark:bg-opacity-50 rounded-md mb-4`}
    >
      <p
        className="p-4 flex items-start"
        onClick={e => {
          setShow(!show);
        }}
        style={{ marginBottom: 0 }}
      >
        {show && (
          <svg
            className="h-6 w-6 text-gray-500 mr-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!show && (
          <svg
            className="h-6 w-6 text-gray-500 mr-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="flex-1">{title}</span>
      </p>

      {show && (
        <div className="rounded-none" style={{marginTop: 0, marginBottom:0}}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Spoiler;
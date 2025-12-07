import React from 'react';

const BuyMeCoffee: React.FC = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/coding_zeus"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 top-[90vh] 2 -translate-y-11/12 z-50 "
      aria-label="Buy me a coffee"
    >
      <div className="">
        <div className="">
                <img className="mx-auto h-14" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" />
            </div>
      </div>
    </a>
  );
};

export default BuyMeCoffee;

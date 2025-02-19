import React from 'react';

  export default function PreviewPage() {
    React.useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
      if (query.get('success')) {
        console.log('Order placed! You will receive an email confirmation.');
      }
  
      if (query.get('canceled')) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }, []);
  
    return (
      <div> 
        <form action="/api/create-checkout-session" method="POST">
          <section className="bg-white flex flex-col w-[400px] h-[112px] rounded-3xl justify-between">
            <button
              type="submit"
              className="h-36 bg-[#F7B801] rounded-3xl text-white font-bold text-3xl cursor-pointer transition-opacity duration-200 shadow-2xs"
              role="link"
            >
              Split
            </button>
          </section>
        </form>

        <form action="/api/create-leader-account" method="POST">
          <section className="bg-white flex flex-col w-[400px] h-[112px] rounded-3xl justify-between">
            <button
              type="submit"
              className="h-36 bg-[#F7B801] rounded-3xl text-white font-bold text-3xl cursor-pointer transition-opacity duration-200 shadow-2xs"
              role="link"
            >
              Make a Leader Account
            </button>
          </section>
        </form>
      </div>
    );
  }

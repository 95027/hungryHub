const Footer = () => {
    return (
      <div className="bg-green-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className=" text-white font-bold tracking-tight">
            Copyright © 2024 HungryHub, All rights reserved.
          </span>
          <span className="text-white font-bold tracking-tight flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;
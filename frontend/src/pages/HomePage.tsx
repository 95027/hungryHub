import landingImage from '../assets/landingImage.avif'
import appStore from '../assets/appStore.jpg'


const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Indulge in a delicious takeaway tonight
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the HungryHub App for faster ordering and personalised
            recommendations
          </span>
          <img src={appStore} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export default function WhyChoosUsGrid() {
  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-full">
          <img
            src="/Assets/thumbnail_fndk-aano-n-lhmr_l1gCKqCe.png"
            alt="Main Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <img
            src="/Assets/images (5).png"
            alt="First Image"
            className="w-full h-[50%] object-cover rounded-lg"
          />
          <img
            src="/Assets/7728019141697440863.png"
            alt="Second Image"
            className="w-full h-[50%] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

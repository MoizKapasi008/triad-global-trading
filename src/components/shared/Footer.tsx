export default function Footer() {
  return (

    <footer>
  {/* Main Footer Content */}
  <div className="w-full bg-[#0d2861] text-white px-6 md:px-12 py-10">
    <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between">

      {/* Logo & Description */}
      <div className="w-full sm:w-[48%] md:w-[22%]">
        <ul className="flex flex-col text-sm font-sans space-y-2">
          <li><p className="text-xl font-bold">Logo</p></li>
          <li>
            <p className="text-sm leading-relaxed">
              We Believe In Our Strength And Our<br />
              Strength Is "Quality". We are Natural<br />
              Spices Wholesale Supplier & Exporter
            </p>
          </li>
          <li>Email</li>
          <li>Social Icons</li>
        </ul>
      </div>

      {/* Information Links */}
      <div className="w-full sm:w-[48%] md:w-[22%]">
        <ul className="flex flex-col text-sm font-sans font-bold space-y-2">
          <p className="text-lg mb-2">Information</p>
          <li><a href="#">Home</a></li>
          <li><a href="#">Harvest Chart</a></li>
          <li><a href="#">Inquiry</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Infrastructure</a></li>
          <li><a href="#">Global Export</a></li>
        </ul>
      </div>

      {/* Products Links */}
      <div className="w-full sm:w-[48%] md:w-[22%]">
        <ul className="flex flex-col text-sm font-sans font-bold space-y-2">
          <p className="text-lg mb-2">Products</p>
          <li><a href="#">Spices</a></li>
          <li><a href="#">Herbs and Leaves</a></li>
          <li><a href="#">Seeds</a></li>
          <li><a href="#">Millets and Grains</a></li>
          <li><a href="#">Dried Fruits and Nuts</a></li>
          <li><a href="#">Dehydrated Products</a></li>
          <li><a href="#">Coconut Products</a></li>
        </ul>
      </div>

      {/* Office Addresses */}
      <div className="w-full sm:w-[48%] md:w-[22%]">
        <ul className="flex flex-col text-sm font-sans font-bold space-y-2">
          <p className="text-lg mb-2">Office Addresses</p>
          <li>Ahmedabad Office: XYZ Street, GIDC</li>
          <li>Surat Office: ABC Road, Katargam</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="w-full bg-[#849bce] px-3 py-3 text-xs text-center text-[#0d2861] font-sans">
    &copy; {new Date().getFullYear()} Triad Global Trading. All rights reserved.
  </div>
</footer>

  );
}

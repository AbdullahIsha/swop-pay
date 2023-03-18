import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

const MainNav = () => {
  return (
    <>
      <div className="nav-panel container">
        <Link href="/">
          <Image
            src="/image/swop-pay-logo-white.png"
            alt="swop-pay-logo-white"
            height={35}
            width={219}
          />
        </Link>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
          <li>
            <Link href="/">Invoice</Link>
          </li>
          <li>
            <Link href="/">Order</Link>
          </li>
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/">Coupon</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">
              <BsPersonCircle size="25" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainNav;

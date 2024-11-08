import { webdevMaintenance, whatsAppIcon } from "@/assets";
import { Icon } from "@/components/base";
import Image from "next/image";
import { styles } from "@/styles";

export function Hero() {
  return (
    <>
      <div className="pt-5 bg-blue-100 min-h-screen flex flex-col items-center justify-center">
        <div className=" flex flex-col lg:flex-row items-center lg:justify-center gap-5">
          <div className="flex flex-col text-center gap-5 my-5">
            <p className="text-3xl lg:text-5xl text-gray-700">
              Under construction
            </p>
            <p className="text-xl lg:text-4xl text-gray-700">
              We are building something great
            </p>
          </div>
          <div className={styles.elementAnimationUpdown}>
            <Image src={webdevMaintenance} alt="Webdev maintenance" />
          </div>
        </div>
        <div className="my-10 text-center">
          <p className="text-gray-500">Reach out to us for emergencies</p>
          <button
            onClick={() => (
              window.open("http://wa.me/6281225576200"), "_blank"
            )}
            type="button"
            className="bg-blue-500/90 text-white text-3xl font-medium rounded-full py-2 px-4 my-5"
          >
            Send messages{" "}
            <Icon src={whatsAppIcon} alt="WhatsApp Icon" size={24} />
          </button>
        </div>
      </div>
    </>
  );
}

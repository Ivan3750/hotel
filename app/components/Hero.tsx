"use client";

import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Hero from "@/app/assets/images/hero.png";

const HeroSection = () => {
  const [checkin, setCheckin] = useState<Date | null>(null);
  const [checkout, setCheckout] = useState<Date | null>(null);
  const [rooms, setRooms] = useState<number>(1);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const [price, setPrice] = useState<number | null>(null);
  const [nights, setNights] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    if (!checkin || !checkout) {
      setError("Please select valid dates");
      return;
    }

    const diff =
      Math.ceil(
        (checkout.getTime() - checkin.getTime()) /
          (1000 * 60 * 60 * 24)
      );

    if (diff <= 0) {
      setError("Check-out must be after check-in");
      return;
    }

    const total =
      (rooms * 500 + adults * 200 + children * 100) * diff + 450;

    setNights(diff);
    setPrice(total);
    setError(null);
    setOpen(true);
  };

  return (
    <>
      <section className="relative w-full px-4 md:px-[60px] lg:px-[100px]">
        <div className="relative h-[700px] w-full overflow-hidden rounded-[20px]">
          <Image
            src={Hero}
            alt="Hero"
            fill
            priority
            className="object-cover"
          />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-4 lg:flex-row lg:items-center">
              
              <div className="text-center lg:text-left">
                <p className="mb-6 font-cormorant text-[36px] leading-[110%] text-black sm:text-[48px] lg:text-[65px]">
                  Hotel mellow Your Gateway to Serenity.
                </p>

                <button className="mx-auto flex h-[58px] w-[245px] items-center justify-center rounded-[6px] bg-[#F9F6F3] font-sora text-[16px] tracking-[0.04em] text-[#353535] lg:mx-0">
                  Explore Rooms
                </button>
              </div>

              <div className="w-full max-w-[420px] rounded-[20px] bg-white px-6 py-8 font-sora uppercase tracking-[0.1em] text-black">
                <p className="mb-4 text-center font-cormorant text-[32px] capitalize">
                  Check Price
                </p>

                <div className="flex flex-col gap-3 normal-case">
                  <DatePicker
                    selected={checkin}
                    onChange={(date: Date | null) =>
                      setCheckin(date)
                    }
                    placeholderText="Check-in"
                    className="w-full rounded-[9px] border border-[#E9E9E9] px-4 py-3"
                  />

                  <DatePicker
                    selected={checkout}
                    onChange={(date: Date | null) =>
                      setCheckout(date)
                    }
                    minDate={checkin ?? undefined}
                    placeholderText="Check-out"
                    className="w-full rounded-[9px] border border-[#E9E9E9] px-4 py-3"
                  />

                  <select
                    value={rooms}
                    onChange={(e) =>
                      setRooms(Number(e.target.value))
                    }
                    className="rounded-[9px] border border-[#E9E9E9] px-4 py-3"
                  >
                    {[1, 2, 3].map((n) => (
                      <option key={n} value={n}>
                        {n} Room{n > 1 && "s"}
                      </option>
                    ))}
                  </select>

                  <div className="flex gap-3">
                    <select
                      value={adults}
                      onChange={(e) =>
                        setAdults(Number(e.target.value))
                      }
                      className="w-full rounded-[9px] border border-[#E9E9E9] px-4 py-3"
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n} Adult{n > 1 && "s"}
                        </option>
                      ))}
                    </select>

                    <select
                      value={children}
                      onChange={(e) =>
                        setChildren(Number(e.target.value))
                      }
                      className="w-full rounded-[9px] border border-[#E9E9E9] px-4 py-3"
                    >
                      {[0, 1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n} Children
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={calculate}
                    className="mt-2 rounded-[6px] bg-[#D16806] py-4 text-white transition hover:opacity-90"
                  >
                    Check price
                  </button>

                  {error && (
                    <p className="text-center text-sm text-red-500">
                      {error}
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {open && price !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-[420px] rounded-[20px] bg-white p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <p className="mb-4 text-center font-cormorant text-[28px]">
              Your stay
            </p>

            <div className="space-y-2 text-sm text-[#555]">
              <div className="flex justify-between">
                <span>Nights</span>
                <span>{nights}</span>
              </div>
              <div className="flex justify-between">
                <span>Rooms</span>
                <span>{rooms}</span>
              </div>
              <div className="flex justify-between">
                <span>Guests</span>
                <span>
                  {adults} adults
                  {children > 0 && ` + ${children} children`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Fee</span>
                <span>
                  450
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <span className="text-sm uppercase text-[#777]">
                Total price
              </span>
              <span className="font-cormorant text-[32px] text-[#D16806]">
                {price} kr
              </span>
            </div>

            <button className="mt-6 w-full rounded-[6px] bg-[#D16806] py-4 text-white">
              Book now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;

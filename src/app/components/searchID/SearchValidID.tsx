"use client";

import { IconLoader, IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";
import IDcode from "../../DataID/IDcode.json";
import NotFoundID from "../../DataID/NotFoundID";
import Link from "next/link";
import { useDictionary } from "../DictionaryProvider";

const SearchValidID = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchLink, setSearchLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (inputValue.length < 12) {
      setErrorMessage(t.authenticity.message);
      setSearchLink("");
      return;
    }

    const normalizedInput = inputValue.replace(/-/g, "");
    const foundID = IDcode.find(
      (item) => item.id.replace(/-/g, "") === normalizedInput
    );

    setIsLoading(true);

    setTimeout(() => {
      if (foundID) {
        setSearchLink(`/authenticity/${foundID.url}`);
      } else {
        const randomUrl = NotFoundID.url;
        setSearchLink(`/authenticity/${randomUrl}`);
      }
      setErrorMessage("");
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 12) {
      setInputValue(value);
      setErrorMessage("");
      setSearchLink("");
    }
  };

  const t = useDictionary();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-xl">
        <p className="font-mono text-sm text-center">{t.authenticity.idDesc}</p>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex items-center justify-center relative ml-8">
          <div className="p-[7px] bg-black absolute -left-[34px]">
            <h1 className="font-mono font-bold text-lg text-white text-center">
              RV
            </h1>
          </div>

          <input
            type="text"
            name="authenticity"
            placeholder={t.authenticity.labelId}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="p-2 w-56 md:w-96 border font-mono font-bold border-black focus:outline-black"
          />

          <button className="p-2 absolute right-0" onClick={handleSearch}>
            <IconSearch className="w-5 h-5" />
          </button>
        </div>

        <div className="h-6 p-2">
          {errorMessage && (
            <p className="text-red-500 font-mono text-sm">{errorMessage}</p>
          )}

          {isLoading ? (
            <div className="animate-spin">
              <IconLoader />
            </div>
          ) : (
            searchLink && (
              <Link href={searchLink} className="font-mono font-bold text-sm">
                {t.authenticity.check}
              </Link>
            )
          )}
        </div>
      </div>

      <div className="pt-4">
        <img
          src="https://fastly.picsum.photos/id/444/800/300.jpg?hmac=ZFafVgzhY57bNf4i0mzmChn7mfL_b8I_tk7RmpI1Qd8"
          alt="ID"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SearchValidID;

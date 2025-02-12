import { useRouter, useSearchParams } from "next/navigation";

type Set = { name: string; value: string };

const useSearchParamsCustom = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setSearchParam = ({ name, value }: Set) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set(name, value);

    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const getSearchParam = (name: string) => searchParams.get(name);

  const removeSearchParam = (name: string) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.delete(name);

    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  return { searchParams, setSearchParam, getSearchParam, removeSearchParam };
};

export default useSearchParamsCustom;

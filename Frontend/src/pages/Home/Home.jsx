import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchImages } from "../../services/api";
import ImageCard from "../../components/ImageCard";
import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const Home = () => {
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
    staleTime: 1000 * 60 * 5,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("fire!");
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  console.log("Data:", data);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      <div className="flex flex-col items-center gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome To Snap Show</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
          velit vitae sem lacinia, nec eleifend velit congue. Mauris convallis
          ex nec libero sollicitudin, vel rutrum metus faucibus.
        </p>
      </div>
      
      {/* Image Card section start */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {isLoading && <LoadingSpinner />}
        {isError && <p>Error fetching images</p>}
        {data &&
          data.pages &&
          data.pages.flatMap((page) =>
            page.map((image) => (
              <ImageCard innerRef={ref} key={image.id} image={image} />
            ))
          )}
      </div>
      {/* Image Card section end */}

      {isFetchingNextPage && <h3>Loading</h3>}
    </div>
  );
};

export default Home;

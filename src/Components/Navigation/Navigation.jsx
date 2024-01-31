import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { HomeApi } from "../../api";
import Navbar from "../Navbar";
import SearchResults from "../SearchResults/SearchResults";
import get from "lodash/get";

const Navigation = () => {
  const dispatch = useDispatch();
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchTermHandler = (term) => {
    setSearch(term);
  };

  const scrollToEnd = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const fetchSearchResults = async () => {
    try {
      const response = await HomeApi.sellableProductSearch({
        search: search,
        page: pageNumber,
      });
      const resData = get(response, "data.results");
      if (pageNumber === 1) setSearchResults(resData);
      else setSearchResults([...searchResults, ...resData]);
      setOverlayOpen(true);
    } catch (error) {
      setLoadMore(false);
    }
  };

  const searchRef = useRef();

  useEffect(() => {
    if (search !== "") {
      setShowSearchResults(true);
      fetchSearchResults();
    } else {
      setSearchResults([]);
      setOverlayOpen(false);
      setPageNumber(1);
      setLoadMore(true);
    }
  }, [search, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
    setLoadMore(true);
  }, [search]);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOverlayOpen(false);
          setSearchResults([]);
          setShowSearchResults(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const fetchUserDetails = async () => {
    // dispatch(actionsCreator.FETCH_USER_DETAILS());
  };

  useEffect(() => {
    if (overlayOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      if (document.querySelector(".navbar-search"))
        document.querySelector(".navbar-search").value = "";
    }
  }, [overlayOpen]);

  const outsideAlerterRef = useRef();
  useOutsideAlerter(outsideAlerterRef);

  return (
    <ChakraProvider>
      <Box>
        <Navbar clickfunc={() => {}} removeLoginPopup={() => {}} search={searchTermHandler} />
        {search !== "" && showSearchResults ? (
          <Box ref={outsideAlerterRef}>
            <SearchResults
              fetchMoreItems={() => scrollToEnd()}
              data={searchResults || []}
              loadMore={loadMore}
              overlayHandler={setOverlayOpen}
              resultsHandler={setShowSearchResults}
              searchTerm={search}
            />
          </Box>
        ) : null}
      </Box>
    </ChakraProvider>
  );
};

export default Navigation;
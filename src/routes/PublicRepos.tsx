import { useEffect, useState } from "react";
import { RepositoriesProps } from "../types/repository";
import { RepoCard } from "../components/RepoCard/RepoCard";

export const PublicRepos = () => {
  const [repos, setRepos] = useState<RepositoriesProps[]>();
  useEffect(() => {
    const headers = {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer${import.meta.env.API_TOKEN}`
    }
    fetch("https://api.github.com/repositories", {headers})
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <>
      <div>
        {repos?.map((repo) => (
          <RepoCard {...repo} />
        ))}
      </div>
    </>
  );
};
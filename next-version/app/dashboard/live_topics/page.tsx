'use client';
import SearchBox from "@/app/ui/dashboard/Search";


export default function Page() {
    const onSearch = (searchTerm: string) => {
      console.log(searchTerm);
    };
    return (
    <div>
      <SearchBox onSearch={onSearch}/>
      <p>{}</p>
    </div>
     );

};
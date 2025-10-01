'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();   // Get URL params e.g. xxx?q=keyword&page=2
  const pathname = usePathname();           // Get URL path e.g. /search
  const { replace } = useRouter();          
  // Extract replace() from the object returned by useRouter() 
  // replace('/home')とすると、今のページを/homeに切り替え

  // term に <input> で入力された文字列が代入される
  // 検索ワードが「apple」なら、URLは /今のページ?query=apple
  // 検索ワードが空なら、queryが消えて /今のページ
  function handleSearch(term: string) { 
    const params = new URLSearchParams(searchParams); // クエリ文字列を「名前」と「値」のペアに分解しオブジェクトに変換
    if (term) { // 
      params.set('query', term);
    } else {
      params.delete('query');
    }
    console.log(params.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../constants';
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function Pagination({count}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get('page') ? 1 : parseInt(searchParams.get('page'));
    const pageCount = Math.ceil(count / PAGE_SIZE);

   function goToPage(page) {
    searchParams.set("page", page);
    setSearchParams(searchParams);
   }

   function NextPage() {
    if (currentPage < pageCount) {
      goToPage(currentPage + 1);
    }
   }

   function PreviousPage() {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
   }

   // Generate page numbers to display
   function getPageNumbers() {
    const pages = [];
    
    if (pageCount <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('ellipsis-start');
      }
      
      // Show pages around current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(pageCount - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < pageCount - 2) {
        pages.push('ellipsis-end');
      }
      
      // Always show last page
      pages.push(pageCount);
    }
    
    return pages;
   }

  return (
    <tr>
      <td colSpan="6">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
          {/* Left side - Results info */}
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage - 1) * PAGE_SIZE + 1}</span> to <span className="font-medium">{currentPage === pageCount ? count : currentPage * PAGE_SIZE}</span> of <span className="font-medium">{count}</span> results
          </div>

          {/* Right side - Shadcn Pagination */}
          <ShadcnPagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={PreviousPage} 
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
              
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === 'ellipsis-start' || page === 'ellipsis-end' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink 
                      onClick={() => goToPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={NextPage}
                  className={currentPage === pageCount ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
            </PaginationContent>
          </ShadcnPagination>
        </div>
      </td>
    </tr>
  )
}

export default Pagination
package com.bidder.bidder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bidder.bidder.models.SearchPattern;

public interface SearchPatternRepository extends JpaRepository<SearchPattern, Integer>{

}

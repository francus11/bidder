package com.bidder.bidder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bidder.bidder.models.AppUser;

public interface AppUserRepository extends JpaRepository <AppUser, Integer>{

}

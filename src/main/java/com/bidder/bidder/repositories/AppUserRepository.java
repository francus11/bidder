package com.bidder.bidder.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bidder.bidder.models.AppUser;

public interface AppUserRepository extends JpaRepository <AppUser, Integer>{
    public Optional<AppUser> findByUsername(String username);
    public Optional<AppUser> findByEmail(String email);
}

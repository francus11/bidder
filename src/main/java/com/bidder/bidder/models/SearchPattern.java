package com.bidder.bidder.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class SearchPattern {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "userID")
    private AppUser user;
    private String name;

    SearchPattern()
    {

    }

    SearchPattern(AppUser user, String name)
    {
        this.user = user;
        this.name = name;
    }

}

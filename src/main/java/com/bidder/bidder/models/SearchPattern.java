package com.bidder.bidder.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "Pattern")
public class SearchPattern {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "userID")
    private AppUser user;

    @Getter
    @Setter
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

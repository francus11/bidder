package com.bidder.bidder.controllers.allegro.categories;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryAllegro {
    public String id;
    public String name;
    public CategoryAllegro parent;
}

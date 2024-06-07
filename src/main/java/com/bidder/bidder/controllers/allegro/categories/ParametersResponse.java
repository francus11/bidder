package com.bidder.bidder.controllers.allegro.categories;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParametersResponse {
    private Parameter[] parameters;

}

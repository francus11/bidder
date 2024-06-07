package com.bidder.bidder.controllers.allegro.categories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

@RequestMapping("api/allegro/categories/")
@RestController
public class CategoriesController {
    @Value("${application.allegro.url}")
    private String ALLEGRO_URL;

    @GetMapping("by-query")
    public Object getCategoriesByQuery(@RequestHeader("Allegro-Authorization") String allegroToken, @RequestParam String query) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + allegroToken);
        headers.set("Accept", "application/vnd.allegro.public.v1+json");

        HttpEntity<Object> requestEntity = new HttpEntity<>(headers);

        UriComponentsBuilder builder = UriComponentsBuilder
                .fromHttpUrl("https://api." + ALLEGRO_URL + "/sale/matching-categories")
                .queryParam("name", query);

        try {
            
            ResponseEntity<Object> responseEntity = restTemplate.exchange(builder.build().toUri(),
                    HttpMethod.GET, requestEntity, Object.class);
    
            if (responseEntity.getStatusCode() == HttpStatus.OK) {
                return responseEntity.getBody();
            } else {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Can't generate token");
            }

        }
        catch (HttpClientErrorException e) {
            throw new ResponseStatusException(e.getStatusCode(), e.getResponseBodyAsString());
            
        }
        

    }

    @GetMapping("{categoryID}/parameters")
    public Object getProductParameters(@RequestHeader("Allegro-Authorization") String allegroToken, @PathVariable String categoryID) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + allegroToken);
        headers.set("Accept", "application/vnd.allegro.public.v1+json");

        HttpEntity<Object> requestEntity = new HttpEntity<>(headers);
        
        UriComponentsBuilder builder = UriComponentsBuilder
            .fromHttpUrl("https://api." + ALLEGRO_URL + "/sale/categories/" + categoryID + "/product-parameters");
        String url = builder.toUriString();
            try {
            
                ResponseEntity<ParametersResponse> responseEntity = restTemplate.exchange(builder.build().toUri(),
                        HttpMethod.GET, requestEntity, ParametersResponse.class);
        
                if (responseEntity.getStatusCode() == HttpStatus.OK) {
                    return responseEntity.getBody();
                } else {
                    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Can't generate token");
                }
    
            }
            catch (HttpClientErrorException e) {
                throw new ResponseStatusException(e.getStatusCode(), e.getResponseBodyAsString());
                
            }
    }
}

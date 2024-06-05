package com.bidder.bidder.controllers.allegro.auth;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

@RequestMapping("api/allegro/auth/")
@RestController
public class AllegroAuthController {

    @Value("${application.url}")
    private String URL;
    @Value("${application.allegro.url}")
    private String ALLEGRO_URL;
    @Value("${application.allegro.client-id}")
    private String CLIENT_ID;
    @Value("${application.allegro.client-secret}")
    private String CLIENT_SECRET;

    @GetMapping(value = "client-token")
    public ClientTokenResponse getClientToken(@RequestParam String code) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        headers.set("Authorization", "Basic " + encodeCredentials(CLIENT_ID, CLIENT_SECRET));
        HttpEntity<Object> requestEntity = new HttpEntity<>(headers);

        UriComponentsBuilder builder = UriComponentsBuilder
                .fromHttpUrl("https://" + ALLEGRO_URL + "/auth/oauth/token")
                .queryParam("grant_type", "authorization_code")
                .queryParam("code", code)
                .queryParam("redirect_uri", URL + "api/allegro-auth/client-token");

        ResponseEntity<ClientTokenResponse> responseEntity = restTemplate.exchange(builder.toUriString(),
                HttpMethod.POST, requestEntity, ClientTokenResponse.class);

        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            return responseEntity.getBody();
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Can't generate token");
        }
    }

    @GetMapping(value = "refresh-token")
    public ClientTokenResponse refreshToken(@RequestParam("refresh_token") String refreshToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        headers.set("Authorization", "Basic " + encodeCredentials(CLIENT_ID, CLIENT_SECRET));
        HttpEntity<Object> requestEntity = new HttpEntity<>(headers);

        UriComponentsBuilder builder = UriComponentsBuilder
                .fromHttpUrl("https://" + ALLEGRO_URL + "/auth/oauth/token")
                .queryParam("grant_type", "refresh_token")
                .queryParam("refresh_token", refreshToken);

        ResponseEntity<ClientTokenResponse> responseEntity = restTemplate.exchange(builder.toUriString(),
                HttpMethod.POST, requestEntity, ClientTokenResponse.class);

        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            return responseEntity.getBody();
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Can't generate token");
        }
    }

    private static String encodeCredentials(String clientId, String clientSecret) {
        String credentials = clientId + ":" + clientSecret;
        // return credentials;
        return new String(Base64.getEncoder().encode(credentials.getBytes()));
    }

}

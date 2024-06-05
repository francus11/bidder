package com.bidder.bidder.controllers.allegro.auth;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientTokenResponse {
    private String access_token;
    private String token_type;
    private String refresh_token;
    private int expires_in;
    private String scope;
    private boolean allegro_api;
    private String iss;
    private String jti;
}

package org.shadhin;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Created by prime on 8/15/16.
 */
public class TokenProvider {
    private final String secretKey;

    public TokenProvider(String secretKey) {
        this.secretKey = secretKey;
    }

    public Token createToken(UserDTO userDTO) {
        if(userDTO == null) return new Token(null);
        String token = userDTO.getUserId() + ":" + computeSignature(userDTO);
        return new Token(token);
    }

    public String computeSignature(UserDTO userDTO) {
        StringBuilder signatureBuilder = new StringBuilder();
        signatureBuilder.append(userDTO.getFullName()).append(":");
        signatureBuilder.append(userDTO.getPassword()).append(":");
        signatureBuilder.append(secretKey);

        MessageDigest digest;
        try {
            digest = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("No MD5 algorithm available!");
        }
        return new String(Hex.encode(digest.digest(signatureBuilder.toString().getBytes())));
    }

    public String getUserIdFromToken(String authToken) {
        if (null == authToken) {
            return null;
        }
        String[] parts = authToken.split(":");
        return parts[0];
    }
}

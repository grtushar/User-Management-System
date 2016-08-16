package org.shadhin;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by prime on 8/9/16.
 */

@org.springframework.web.bind.annotation.RestController
public class RestController {

    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
    UserDAO userDAO = (UserDAO) context.getBean("userDAO");
    TokenProvider tokenProvider = (TokenProvider) context.getBean("tokenProvider");

    @RequestMapping("/all")
    public String getAll() {
        return "hello world";
    }

    @CrossOrigin(allowedHeaders="*",allowCredentials="true")
    @RequestMapping(value = "/register", method = RequestMethod.POST, headers="content-type=text/*", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Boolean> register(@RequestBody UserDTO userDTO) {
        return new ResponseEntity<>(userDAO.register(userDTO), null, HttpStatus.CREATED);
    }

    @CrossOrigin(allowedHeaders="*",allowCredentials="true")
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded", produces = "application/json")
    public ResponseEntity<Token> authorize(@RequestParam String userId, @RequestParam String password){
        if(!userDAO.userExist(userId, password)) {
            return new ResponseEntity<>(tokenProvider.createToken(null), null, HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(tokenProvider.createToken(userDAO.getUserById(userId)), null, HttpStatus.OK);
    }

    @CrossOrigin(allowedHeaders="*",allowCredentials="true")
    @RequestMapping(value = "/user", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<UserDTO> getUser(HttpServletRequest request) {
        if(request.getHeader("token").equals("null")) {
            return new ResponseEntity<>(null, null, HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(
                userDAO.getUserById(
                        tokenProvider.getUserIdFromToken(request.getHeader("token"))),
                null, HttpStatus.OK);
    }
}

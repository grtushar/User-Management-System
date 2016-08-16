package org.shadhin;

import org.apache.catalina.User;

import java.util.*;

/**
 * Created by prime on 8/9/16.
 */
public class UserDAO {
    private List<UserDTO> users = new ArrayList<>();

    public boolean register(UserDTO userDTO) {
        users.add(userDTO);
        return true;
    }

    public UserDTO getUserById(String userId) {
        for (UserDTO userDTO : users) {
            if(userDTO.getUserId().equals(userId)) return userDTO;
        }

        return null;
    }

    public boolean userExist(String userId, String password) {
        if(getUserById(userId) == null) return false;
        if(getUserById(userId).getPassword().equals(password)) return true;
        return false;
    }

    public List<UserDTO> getAllUser() {
        return users;
    }
}

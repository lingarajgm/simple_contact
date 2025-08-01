package com.crm.crm.model;

import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class ContactController {

    private final ContactRepository repository;

    @Autowired
    public ContactController(ContactRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/contacts")
    public Collection<Contact> contacts() {
        return (Collection<Contact>) repository.findAll();
    }

    @PostMapping("/contacts")
    public ResponseEntity<Contact> createContact(@Validated @RequestBody Contact contact) throws URISyntaxException {
        Contact result = repository.save(contact);
        return ResponseEntity.ok().body(result);
    }
}

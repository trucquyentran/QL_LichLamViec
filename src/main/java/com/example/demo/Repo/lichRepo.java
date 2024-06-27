package com.example.demo.Repo;


import com.example.demo.Entity.Lich;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface lichRepo extends MongoRepository<Lich, String> {
}

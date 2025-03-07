package com.pranjal.portfolio.respository;

import com.pranjal.portfolio.entity.Projects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectsRepository extends JpaRepository<Projects, Long> {
}

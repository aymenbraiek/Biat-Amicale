package org.catsid.dao;

import java.util.List;

import org.catsid.entities.TYPE_RESIDENCE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Type_Res_REPO extends JpaRepository<TYPE_RESIDENCE, String> {

	@Query("SELECT r.PERIODE FROM TYPE_RESIDENCE r WHERE r.TYPE_RES=:typeResidence")
	public List<String> periode(@Param("typeResidence") String typeResidence);
}

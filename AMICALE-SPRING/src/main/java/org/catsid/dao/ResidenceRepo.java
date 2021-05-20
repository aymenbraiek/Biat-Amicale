package org.catsid.dao;

import java.util.List;

import org.catsid.entities.Residence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenceRepo extends JpaRepository<Residence, String> {

	@Query("select a.NOM_RESIDENCE FROM Residence a ")
	public List<String> listResidenceName();

	@Query("select a.VILLE from  Residence a where a.NOM_RESIDENCE=:x")
	public String findVille(@Param("x") String NOM_RESIDENCE);

	@Query("select a.NOMBRE_LIT from Residence a where a.NOM_RESIDENCE=:x")
	public String nbreLit(@Param("x") String nomResidence);

	@Query("SELECT a.TYPE_PERIODE FROM Residence a WHERE a.NOM_RESIDENCE=:x")
	public String typePeriode(@Param("x") String nomResidence);

}

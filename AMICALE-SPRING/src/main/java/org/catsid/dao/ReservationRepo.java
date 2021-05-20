package org.catsid.dao;

import java.util.List;

import org.catsid.entities.reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReservationRepo extends JpaRepository<reservation, Integer> {

	@Query("select max (r.ID_RESERVATION) from reservation r")
	public Integer getMaxIdReservation();

	@Query("select r.MATRICULE from reservation r where r.MATRICULE=:x")
	public String existReservation(@Param("x") String matricule);

	/*@Query("select r.MATRICULE , r.NOM ,r.AFFECTATION ,r.NOM_HOTEL ,r.VILLE ,r.CLASSEMENT ,r.TYPE_RESERVATION, r.DATE_DEBUT ,r.DATE_FIN, r.NUM_TEL_FIX "
			+ ",r.NUM_TEL_PORT,r.NB_JOURS,r.NB_CHAMBRES,r.NB_ADULTES, r.NB_ENFANT ,r.COMMENTAIRES from reservation r where r.NATURE='HOTEL'")
	public List<reservation> findallReservation();*/
	
	@Query("select r from reservation r where r.NATURE='HOTEL'")
	public List<reservation> findallReservation();


}

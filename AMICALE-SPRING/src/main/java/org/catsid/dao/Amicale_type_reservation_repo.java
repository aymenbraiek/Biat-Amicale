package org.catsid.dao;

import java.util.Date;
import java.util.List;
import org.catsid.entities.AMICALE_TYPE_RESERVATION;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Amicale_type_reservation_repo extends JpaRepository<AMICALE_TYPE_RESERVATION, String> {

	@Query("select a.MIN_STAY from AMICALE_TYPE_RESERVATION a where a.NOM_HOTEL=:x and TYPE_RESERVATION=:y and DATE_DEBUT<=:w and DATE_FIN>=:w")
	public String getMinstay(@Param("x") String Nom_hotel, @Param("y") String TYPE_RESERVATION,
			@Param("w") String DATE_FIN);
	/*
	 * SELECT MIN_STAY FROM AMICALE_TYPE_RESERVATION WHERE NOM_HOTEL ='BADIRA' AND
	 * ((TYPE_RESERVATION ='ALL' AND DATE_DEBUT IS NULL AND DATE_FIN IS NULL)
	 * OR(TYPE_RESERVATION ='ALL' AND DATE_DEBUT >= 'date_fin_formulaire' AND
	 * DATE_FIN <= 'date_fin_formulaire')) OR(TYPE_RESERVATION
	 * =nvl('type_formulaire','ALL') AND DATE_DEBUT IS NULL AND DATE_FIN IS NULL)
	 * OR(TYPE_RESERVATION ='type_formulaire' AND DATE_DEBUT >=
	 * 'date_fin_formulaire' AND DATE_FIN <= 'date_fin_formulaire'))
	 */

	@Query("select b.TYPE_RESERVATION from AMICALE_TYPE_RESERVATION b where b.NOM_HOTEL=:Nom_hotel")
	public List<String> typeReservation(@Param("Nom_hotel") String Nom_hotel);

	@Query("select a from AMICALE_TYPE_RESERVATION a where a.NOM_HOTEL=:z")
	public AMICALE_TYPE_RESERVATION testPeriode(@Param("z") String Nom_hotel);

}

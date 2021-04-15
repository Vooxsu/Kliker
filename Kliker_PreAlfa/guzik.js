function onload()
{
	document.getElementById("punkty").innerHTML=punkt;
	document.getElementById("ile_next").innerHTML="Za następne kliknięcie dostaniesz: "+dodawana;
	document.getElementById("chel_timmer").innerHTML="Twój cel to "+cel+" Kliknięć a nagroda to: "+nagroda;
	document.getElementById("chel_udany").innerHTML=" ";
	document.getElementById("chel_nie_udany").innerHTML=" ";
	document.getElementById("lvl").innerHTML="Twój LVL to :"+lvl;
	document.getElementById("plus1").innerHTML="+1";
	document.getElementById("plus1_kom").innerHTML="Masz "+ile_plus1+" Następny za "+Cena_plus1;
	document.getElementById("plus2").innerHTML="+2";
	document.getElementById("plus2_kom").innerHTML="Masz "+ile_plus2+" Następny za "+Cena_plus2;
	document.getElementById("duszek").innerHTML="Duszek";
	document.getElementById("duszek_kom").innerHTML="Masz "+ile_duszków+" Następny za "+cena_duszków;
	document.getElementById("fabryka").innerHTML="Fabryka";
	document.getElementById("Fabryka_kom").innerHTML="Masz "+ile_fabryk+" Następna za "+cena_fabryka;
}

function Guzik()
{
	ile_klikóww();
	punkt=punkt+dodawana;
		ile_kliknołem_dla_chel=ile_kliknołem_dla_chel+lvl;
		document.getElementById("punkty").innerHTML=punkt;
		if(ile_pkt_all==50000)
		{
			Razy21();
		}
		if(ile_pkt_all==100000)
		{
			Razy22();
		}
		if(ile_pkt_all==200000)
		{
			Razy23();
		}
		if(ile_pkt_all==400000)
		{
			Razy24();
		}
}

function Plus1()
{
		if(punkt>0)
			{
				if(Cena_plus1<=punkt)
					{
						ile_plus1=ile_plus1+1;
						punkt=punkt-Cena_plus1;
						Cena_plus1=Cena_plus1+200;
						dodawana=dodawana+1;
						postęp();
						onload();
						yes.play();
					}
				else
					{
						braknie=Cena_plus1-punkt;
						no.play();
						document.getElementById("plus1_kom").innerHTML="Masz za mało Braknie: "+braknie;
						setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
					}
			}
		else
			{
				braknie=Cena_plus1-punkt;
						no.play();
						document.getElementById("plus1_kom").innerHTML="Masz za mało Braknie: "+braknie;
						setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
			}
}

function Plus2()
{
	if(punkt>0)
		{
			if(Cena_plus2<=punkt)
				{
					ile_plus2=ile_plus2+1;
					punkt=punkt-Cena_plus2;
					dodawana=dodawana+2;
					Cena_plus2=Cena_plus2+500;
					onload();
					postęp();
					yes.play();
				}
			else
				{
					braku=Cena_plus2-punkt;
					no.play();
					document.getElementById("plus2_kom").innerHTML="Masz za mało Braknie: "+braku;
					setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
				}
		}
		else
			{
				braku=Cena_plus2-punkt;
					no.play();
					document.getElementById("plus2_kom").innerHTML="Masz za mało Braknie: "+braku;
					setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
			}
}

function Duszek()
{
		if(punkt>0)
			{
				if(cena_duszków<=punkt)
					{
						ile_duszków=ile_duszków+1;
						punkt=punkt-cena_duszków;
						cena_duszków=cena_duszków+dus;
						duszek_daje=0;
						duszek_daje=ile_duszków*razy_duszek;
						document.getElementById("Duszek_daje").innerHTML="Od Duszków Na Sec:  "+duszek_daje;
						document.getElementById("duszek_kom").innerHTML="Masz "+ile_duszków+" Następny za "+cena_duszków;
						yes.play();
						if(d==0)
						{
						wywolaj_duszka();
						postęp();
						onload();
						d=d+1;
						}
						else
						{
						onload();
						}
					}
				else
					{
						bran=cena_duszków-punkt;
						no.play();
						document.getElementById("duszek_kom").innerHTML="Masz za mało Braknie: "+bran;
						setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
					}
			}
		else
			{
				bran=cena_duszków-punkt;
						no.play();
						document.getElementById("duszek_kom").innerHTML="Masz za mało Braknie: "+bran;
						setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
			}
}

function wywolaj_duszka()
{
	if(ile_duszków<granica_duszków)
	{
	punkt=(ile_duszków*razy_duszek)+punkt;
	document.getElementById("punkty").innerHTML=punkt;
	setTimeout("wywolaj_duszka()",1000);
	}	
	else
		{
			duch++;
			granica_duszków=granica_duszków+50;
			razy_duszek=razy_duszek+0.75;
			duszek_daje=0;
			duszek_daje=(ile_duszków*razy_duszek);
			dus=dus*2;
						document.getElementById("Duszek_daje").innerHTML="Od Fabryk Na Sec:  "+duszek_daje;
			if(duch==5)
			{
				duch=0;
				razy_duszek=razy_duszek*2;
			}
			setTimeout("wywolaj_duszka()",1000);
		}
}

function Fabryka()
{
		if(punkt>0)
			{
				if(cena_fabryka<=punkt)
					{
						ile_fabryk=ile_fabryk+1;
						punkt=punkt-cena_fabryka;
						cena_fabryka=cena_fabryka+fab;
						ile_daje_fabryka=0;
						ile_daje_fabryka=(ile_fabryk*razy_fabryka);
						document.getElementById("Fabryka_kom").innerHTML="Masz "+ile_fabryk+" Następny za "+cena_fabryka;
						document.getElementById("Fabryka_daje").innerHTML="Za Fabryki na Sec dostajesz:  "+ile_daje_fabryka;
						yes.play();
						if(f==0)
							{
								wywolaj_Fabryka();
								onload();
								postęp();
								f=f+1;
							}
						else
							{
								onload();
							}
					}
				else
					{
						brun=cena_fabryka-punkt;
						no.play();
						document.getElementById("Fabryka_kom").innerHTML="Masz za mało Braknie: "+brun;
						setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
					}
			}
		else
			{
				brun=cena_fabryka-punkt;
						no.play();
						document.getElementById("Fabryka_kom").innerHTML="Masz za mało Braknie: "+brun;
						setTimeout("postęp()",2500);
						setTimeout("onload()",2500);
			}
}

function wywolaj_Fabryka()
{
	if(ile_fabryk<granica_fabryki)
	{
	punkt=(ile_fabryk*razy_fabryka)+punkt;
	document.getElementById("punkty").innerHTML=punkt;
	setTimeout("wywolaj_Fabryka()",1000);
	}
	else
		{
			fabra=fabra+2;
			granica_fabryki=granica_fabryki+50;
			razy_fabryka=razy_fabryka+0.75;
			ile_daje_fabryka=0;
			ile_daje_fabryka=(ile_fabryk*razy_fabryka);
			fab=fab*2.5;
						document.getElementById("Fabryka_daje").innerHTML="Za Fabryki na Sec dostajesz:  "+ile_daje_fabryka;
			if(fabra==6)
			{
				fabra=0;
				razy_fabryka=razy_fabryka*2
			}
			setTimeout("wywolaj_Fabryka()",1000);
		}
}

function wywolaj_chel1()
{
	if(chalenge_uruchomiony==0)
	{
	ile_kliknołem_dla_chel=0;
	yes.play();
	chalenge_uruchomiony=1;
	document.getElementById("chel_timmer").innerHTML=sec+" Sec Zostało jeszcze "+cel;
	setTimeout("chel1()",1000);
	}
	if(wywolaj_chel1>=1)
		alert="Już uruchomiłeś CHELANGE";
}

function chel1()
{
	jak_szybko=jak_szybko+1;
	tyle=cel-ile_kliknołem_dla_chel;
	sec=sec-1;
	document.getElementById("chel_timmer").innerHTML=sec+" Sec Zostało jeszcze "+tyle;
	if(sec>0)
		{
			if(tyle<=0)
			{
				yes.play();
					document.getElementById("chel_timmer").innerHTML=sec;
					document.getElementById("chel_udany").innerHTML="Cel udany w "+jak_szybko+" Sec";
					setTimeout("wygrana()",2000);
			}
			if(tyle>0)
			{
			a.play();
			setTimeout("chel1()",1000);
			}
		}
	if(sec<=0)
		{
			if(ile_kliknołem_dla_chel>=cel)
				{
					yes.play();
					document.getElementById("chel_timmer").innerHTML=sec;
					document.getElementById("chel_udany").innerHTML="Cel udany w "+jak_szybko+" Sec";
					setTimeout("wygrana()",2000);
				}
			if(ile_kliknołem_dla_chel<cel)
				{
					no.play();
					document.getElementById("chel_timmer").innerHTML=sec;
					document.getElementById("chel_nie_udany").innerHTML="Cel NIE udany";
					setTimeout("przegrana()",2000);
				}
		}
}

function wygrana()
{
	sec=0;
	sec=sec+10+sec_czas;
	sec_czas=sec_czas+1;
	ile_kliknołem_dla_chel=0;
	punkt=punkt+nagroda;
	nagroda=nagroda+500;
	cel=cel+50;
		onload();
	chalenge_uruchomiony=0;
	jak_szybko=0;
	if(lvl<5)
	{
	lvl=lvl+1;
	document.getElementById("lvl").innerHTML="Twój LVL to :"+lvl;	
	}
	if(lvl==5)
	{
		document.getElementById("lvl").innerHTML="Maksymalny Poziom";
	}
}

function przegrana()
{
	sec=0;
	sec=sec+10+sec_czas-1;
	sec_czas=sec_czas-1;
	ile_kliknołem_dla_chel=0;
	lvl=lvl-1;
	cel=cel+50;
	onload();
	nagroda=nagroda-500;
	chalenge_uruchomiony=0;
	jak_szybko=0;
}
















































//E.R.V
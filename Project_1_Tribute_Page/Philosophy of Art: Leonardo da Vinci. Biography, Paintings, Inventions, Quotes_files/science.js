
function science() 
{
	var b_desc = "<h3>Blog this Page</h3>";
	var img_path = "http://www.spaceandmotion.com/Images/help/";
	var l_txt = "";
	var l_url = "";
	var l_img = "";
	var output = "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\">\n<tr>\n\t<td colspan=\"7\" class=\"f12\" align=\"center\">" + b_desc + "</td>\n</tr>\n<tr>\n\t";

	l_txt = "Blogger";	
	l_url = "'http://www.blogger.com/blog-this.g?&amp;u='+encodeURIComponent(location.href)+'&amp;n='+encodeURIComponent(document.title)+'&amp;t='+encodeURIComponent(location.href)";
	l_img = img_path + "blogger.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "Friendster";	
	l_url = "'http://blogs.www.friendster.com/t/app/weblog/post?is_qp=1&v=2&qp_show=tb,ca,ac,ap,ew&__mode=edit_entry&qp_title='+encodeURIComponent(document.title)+'&qp_href='+encodeURIComponent(location.href)";
	l_img = img_path + "friendster.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "Freewebs";	
	l_url = "'http://members.freewebs.com/MembersB/siteManager.jsp?token='";
	l_img = img_path + "freewebs.jpg";
	output = output + build_link(l_txt, l_url,l_img);	

	l_txt = "Livejournal";	
	l_url = "'http://www.livejournal.com/update.bml'";
	l_img = img_path + "livejournal.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "Live Spaces";	
	l_url = "'http://home.services.spaces.live.com/'";
	l_img = img_path + "livespaces.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "Typepad";	
	l_url = "'http://www.typepad.com/t/app/weblog/post?is_qp=1&v=2&qp_show=ca,kw,tt,ew&qp_title='+encodeURIComponent(document.title)+'&qp_href='+encodeURIComponent(location.href)";
	l_img = img_path + "typepad.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "Wordpress";	
	l_url = "'http://www.wordpress.com/wp-admin/link-add.php?&amp;linkurl='+encodeURIComponent(location.href)+'&amp;name='+encodeURIComponent(document.title)";
	l_img = img_path + "wordpress.jpg";
	output = output +  build_link(l_txt, l_url,l_img);	

	output = output + "</tr></table>\n<br>\n";
	document.write(output);

	var b_desc = "<h3>BookMark / Share this Page</h3>";
	var keyword_list = "physics, nature , evolution , philosophy , science , truth, reality , metaphysics";
	var img_path = "http://www.spaceandmotion.com/Images/help/";
	var l_txt = "";
	var l_url = "";
	var l_img = "";
	var output = "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\">\n<tr>\n\t<td colspan=\"7\" class=\"f12\" align=\"center\">" + b_desc + "</td>\n</tr>\n<tr>\n";

	l_txt = "Google";
	l_url = "'http://www.google.com/bookmarks/mark?op=edit&amp;bkmk='+encodeURIComponent(document.location.href)+'&amp;title='+encodeURIComponent(document.title)";
	l_img = img_path + "google.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "MyYahoo";
	l_url = "'http://myweb2.search.yahoo.com/myresults/bookmarklet?t='+encodeURIComponent(document.title)+'&u='+encodeURIComponent(window.location.href)+'&tag=" + keyword_list + "'";
	l_img = img_path + "yahoomyweb.jpg";
	output = output + build_link(l_txt, l_url,l_img);	

	l_txt = "Live";
	l_url = "'https://favorites.live.com/quickadd.aspx?url='+encodeURIComponent(location.href)+'&amp;title='+encodeURIComponent(document.title)";
	l_img = img_path + "live.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "Facebook";
	l_url = "'http://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href)+'&amp;t='+encodeURIComponent(document.title)";
	l_img = img_path + "facebook.jpg";
	output = output +  build_link(l_txt, l_url,l_img);	

	l_txt = "Del.icio.us";
	l_url = "'http://del.icio.us/post?v=4&noui&jump=close&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title)";
	l_img = img_path + "delicious.jpg";
	output = output +  build_link(l_txt, l_url,l_img);

	l_txt = "Digg";
	l_url = "'http://digg.com/submit?phase=2&url='+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(document.title)";
	l_img = img_path + "digg.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	l_txt = "Technorati";
	l_url = "'http://www.technorati.com/faves?add='+escape(document.location)";
	l_img = img_path + "technorati.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	output = output + "</tr>\n<tr><td><br></td></tr>";
	document.write(output);


	var suggested_tags = "<br><b>Some Suggested Tags (copy and paste as appropriate)</b><br>philosophy , truth , reality , physics , metaphysics, science, relativity , quantum theory , cosmology , mathematics , theory , evolution , nature , education , society , politics, TOE, GUT";
	var keyword_list = "";
	var img_path = "http://www.spaceandmotion.com/Images/help/";
	var l_txt = "";
	var l_url = "";
	var l_img = "";
	var output = "\n<tr>\n\t";

	l_txt = "Stumble";
	l_url = "'http://www.stumbleupon.com/submit?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title)";
	l_img = img_path + "stumbleupon.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	l_txt = "Reddit";
	l_url = "'http://reddit.com/submit?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title)";
	l_img = img_path + "reddit.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	l_txt = "Squidoo";
	l_url = "'http://www.squidoo.com/lensmaster/bookmark?'+encodeURIComponent(location.href)";
	l_img = img_path + "squidoo.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	l_txt = "Fark";
	l_url = "'http://www.fark.com/cgi/farkit.pl?u='+encodeURIComponent(location.href)+'&h='+encodeURIComponent(document.title)";
	l_img = img_path + "fark2.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	l_txt = "Newsvine";
	l_url = "'http://www.newsvine.com/_tools/seed&save?u='+encodeURIComponent(location.href)+'&h='+encodeURIComponent(document.title)";
	l_img = img_path + "newsvine.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	l_txt = "BlinkList";
	l_url = "'http://blinklist.com/blink?u='+encodeURIComponent(location.href)+'&t='+encodeURIComponent(document.title)";
	l_img = img_path + "blink2.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	l_txt = "Spurl";
	l_url = "'http://www.spurl.net/spurl.php?v=3&title='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(document.location.href)+'&blocked='+encodeURIComponent(document.selection?document.selection.createRange().text:document.getSelection())";
	l_img = img_path + "spurl.jpg";
	output = output + build_link(l_txt, l_url,l_img);

	output = output + "</tr>\n<tr>\n\t<td colspan=\"10\" class=\"f9grey\" align=\"center\">" + suggested_tags + "</td>\n</tr>\n</table>";
	document.write(output);
}
function build_link(txt, url,img) {
	return "<td align=\"center\" width=\"50\"><a href=\"javascript:void window.open(" + url + ")\" class=\"f10\"><img src=\"" + img + "\" border=\"0\"><br>\n\t" + txt + "</a></td>\n\t";
}

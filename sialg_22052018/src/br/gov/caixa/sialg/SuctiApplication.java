package br.gov.caixa.sialg;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

import br.gov.caixa.sialg.rest.RelatorioBOEEndpoint;

public class SuctiApplication extends Application{

	public Set<Class<?>> getClasses()
    {
        Set<Class<?>> s = new HashSet<Class<?>>();
        s.add(RelatorioBOEEndpoint.class);
        return s;
    }
}
